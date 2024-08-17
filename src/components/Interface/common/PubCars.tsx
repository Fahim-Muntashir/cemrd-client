
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { FaUsers } from "react-icons/fa"

export default function PubCards() {
    return (
        <Card className="w-full max-w-lg my-4">
            <CardContent className="grid gap-4">
                <img
                    src="https://www.summithealth.com/sites/default/files/2023-04/heart-disease-hub.jpg"
                    alt="Blog post cover image"
                    width="400"
                    height="240"
                    className="mt-5 rounded-md object-cover"
                    style={{ aspectRatio: "400/260", objectFit: "cover" }}
                />
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDaysIcon className="w-4 h-4" />
                    <span>August 17, 2024</span>
                </div>
                <div className="flex gap-2 text-sm text-muted-foreground">
                    <FaUsers

                        className="w-10 h-10" />
                    <span>Mahmudul Hasan, Md Abdus Sahid, Md Palash Uddin, Md Abu Marjan, Seifedine Kadry, Jungeun Kim</span>
                </div>
                <h3 className="text-xl font-semibold">
                    Effect of imbalance data handling techniques to improve the accuracy of heart disease prediction using machine
                    learning and deep learning
                </h3>
                <div className="flex justify-end">
                    <Link href="#" className="inline-flex items-center gap-2 text-primary" prefetch={false}>
                        See More
                        <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}

function ArrowRightIcon(props
    : any
) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}


function CalendarDaysIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
            <path d="M16 18h.01" />
        </svg>
    )
}

