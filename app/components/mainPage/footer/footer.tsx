export function Footer() {
    return (
        <footer className="flex flex-col gap-4 pt-4 pb-16 px-5 text-white bg-[#1414A2]">
            <div className="flex gap-3">

                <a href="https://www.instagram.com/forumdefamiliasatipicas/">
                    <img src="/instagram.svg" alt="Instagram Logo" className="size-6" />
                </a>
                
                <a href="#">
                    <img src="/facebook.svg" alt="Facebook Logo" className="size-6" />
                </a>

                <a href="#">
                    <img src="/x.svg" alt="X Logo" className="size-6" />
                </a>

                <a href="https://www.tiktok.com/@i.f.familias.atipicas?_t=ZM-8vULLHwh5c7&_r=1">
                    <img src="/tiktok.svg" alt="Facebook Logo" className="size-6" />
                </a>

                <a href="https://www.linkedin.com/company/forumdefamiliasatipicas/">
                    <img src="/linkedIn.svg" alt="LinkedIn Logo" className="size-6" />
                </a>

                <a href="https://www.youtube.com/@somosiffa">
                    <img src="/youtube.svg" alt="Youtube Logo" className="size-6" />
                </a>
            </div>
            <div>
                <p className="font-ibm text-sm leading-5">© 2024 IFFA. All rights reserved.</p>
            </div>
        </footer>
    )
}