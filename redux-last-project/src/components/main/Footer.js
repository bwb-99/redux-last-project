import {Fragment} from "react";

/*
    const Footer=()=>{

    }임명적 함수

    아래는 선언적함수
 */
function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="copy_right_text text-center">
                        <p>2025 마지막 개인 프로젝트 (Redux)<i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank"></a></p>
                        </div>
                 </div>
            </div>
            </div>
        </footer>

    )
}

export default Footer;