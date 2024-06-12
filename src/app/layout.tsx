import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
    title: "T3 Gallery",
    description: "a T3 Gallery",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
    return (
        <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
            <div>Gallery</div>
            <div>Sign In</div>
        </nav>
    );
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${GeistSans.variable}`}>
            <body className="flex flex-col gap-4 font-sans">
                <TopNav />
                {children}
            </body>
        </html>
    );
}
