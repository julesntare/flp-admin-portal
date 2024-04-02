import React from "react";
import { Fragment, useState } from "react";
import { useEffect } from "react";

export default function Loader() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(false);
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };
    }, [show]);
    return (
        <Fragment>
            {show && (
                <div className="loader-wrapper">
                    <div className="theme-loader">
                        <div className="loader-p"></div>
                    </div>
                </div>
            )}
        </Fragment>
    );
}