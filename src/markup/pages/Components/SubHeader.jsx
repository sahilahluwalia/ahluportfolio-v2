import React from 'react';
import {Link, useLocation} from "react-router-dom";
import { bannerImage } from "data/imagesData";
const bg = bannerImage;
function SubHeader(props:{
    type: string;
}) {
    const location = useLocation();
    // console.log(location);
    const { pathname } = location;
    const pathArray = pathname.split("/");
    const basePath = pathArray[1];
    const subPath = pathArray[2];
    const subSubPath = pathArray[3];
    const subSubSubPath = pathArray[4];
    //   const { id } = useParams();
    //   console.log(id);
    const removeSpace = (str) => {
        return str.replace(/-/g, " ");
    };
    const {type} = props;
    return (
        <div
            className='dlab-bnr-inr overlay-black-middle bg-pt '
            style={{backgroundImage: "url(" + bg + ")"}}
        >
            <div className='container '>
                <div className='dlab-bnr-inr-entry'>
                    <h1 className='text-white'>{type}</h1>
                    <div className='breadcrumb-row'>
                        <ul className='list-inline'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='text-capitalize'>
                                <Link to={`/${basePath}`}>{basePath}</Link>
                            </li>
                            {subPath && (
                                <li className='text-capitalize'>
                                    <Link to={`${subPath}`}>{removeSpace(subPath)}</Link>
                                </li>
                            )}
                            {subSubPath && (
                                <li className='text-capitalize'>
                                    <Link to={`${subPath}/${subSubPath}`}>
                                        {removeSpace(subSubPath)}
                                    </Link>
                                </li>
                            )}
                            {subSubSubPath && (
                                <li
                                    style={{
                                        textTransform: "uppercase",
                                    }}
                                    className='text-uppercase'
                                >
                                    <Link to={`${subPath}/${subSubPath}/${subSubSubPath}`}>
                                        {removeSpace(subSubSubPath)}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubHeader;
