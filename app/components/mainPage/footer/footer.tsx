export function Footer() {
    return (
        <footer className="flex flex-col gap-4 pt-4 pb-16 px-5 text-white bg-[#1414A2]">
            <div className="flex gap-3">
                <img src="/facebook.svg" alt="Facebook Logo" className="size-6" />
                <img src="/instagram.svg" alt="Instagram Logo" className="size-6" />
                <img src="/x.svg" alt="X Logo" className="size-6" />
                <img src="/linkedIn.svg" alt="LinkedIn Logo" className="size-6" />
                <img src="/youtube.svg" alt="Youtube Logo" className="size-6" />
            </div>
            <div>
                <p className="font-ibm text-sm leading-5">© 2024 IFFA. All rights reserved.</p>
            </div>
        </footer>
    )
}