import Image from 'next/image';
import ImageLogo from '@/public/logo.png';

const logo = `
███████╗██╗  ██╗██╗███████╗████████╗██╗   ██╗███╗   ██╗███████╗██████╗ 
██╔════╝╚██╗██╔╝██║██╔════╝╚══██╔══╝██║   ██║████╗  ██║██╔════╝██╔══██╗
█████╗   ╚███╔╝ ██║█████╗     ██║   ██║   ██║██╔██╗ ██║█████╗  ██████╔╝
██╔══╝   ██╔██╗ ██║██╔══╝     ██║   ██║   ██║██║╚██╗██║██╔══╝  ██╔══██╗
███████╗██╔╝ ██╗██║██║        ██║   ╚██████╔╝██║ ╚████║███████╗██║  ██║
╚══════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝    ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝
`;

export function Logo() {
    return (
        <div className="flex flex-col m-5 justify-center items-center">
            <Image src={ImageLogo} alt="Logo" width={120} height={10} />
            <pre
                style={{
                    fontFamily: 'monospace',
                    fontSize: '0.4rem',
                    whiteSpace: 'pre',
                }}
            >
                {logo}
            </pre>
        </div>
    );
}
