// import Image from "next/image";
import Link from "next/link";

const mockUrls = [
    "https://gianni.org/brightstart-vite/painting.jpg",
    "https://gianni.org/brightstart-vite/mj_boy_smiling.png",
    "https://gianni.org/brightstart-vite/book.jpg",
    "https://gianni.org/brightstart-vite/reading.jpg",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default function HomePage() {
    return (
        <main className="">
            <div className="flex flex-wrap gap-2">
                {[...mockImages, ...mockImages, ...mockImages].map((image) => (
                    <div key={image.id} className="w-48">
                        <img src={image.url} alt="image" className="w-full" />
                    </div>
                ))}
            </div>
            Hello (gallery in progress)
        </main>
    );
}
