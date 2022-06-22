import React from "react"

const Header = () => {
    return (
        
            <div className='Header position-relative d-flex justify-content-center align-items-center mb-md-5 '>

                <div className='position-absolute d-flex flex-sm-column flex-row justify-content-center align-items-center user-container'>

                    <div className='position-relative me-sm-0 me-5'>

                        <div className=' overflow-hidden ps-2 pe-2 rounded-circle box-user'>
                            <i className="fas fa-user p-2 user-icon "></i>
                        </div>

                        <i className="fas fa-pen position-absolute end-0 rounded-circle p-2 text-light fs-6 bg-red pen-icon"></i>

                    </div>

                    <p className='fs-4 ms-sm-0 ms-5 fw-bold color-blue mb-0 user-name'>devel oper</p>

                </div>
            </div>
       
    )
};

export default Header;
