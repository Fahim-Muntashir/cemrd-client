
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, UsersIcon, EditIcon, TrashIcon } from "lucide-react"
import Container from '@/components/Shared/Container'
import { getAllPublications } from '@/services/actions/publication'
import { Scrollbar } from 'react-scrollbars-custom';
import PageContainer from "@/components/layout/page-container"

const Page = async () => {

    // This would typically come from props or a data fetch
    const data = await getAllPublications();

    const handleEdit = () => {
        // Navigate to edit page or open edit modal
    }

    const handleDelete = async () => {
        // Simulating delete operation

        console.log('data deleted')
    }

    return (
        <PageContainer scrollable={true}>
            <br />


            {
                data.map((data) => (
                    <Card className="w-full">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold">{data?.title}</h2>
                                    <p className="text-muted-foreground">{data?.subtitle}</p>
                                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                        <div className="flex items-center">
                                            <CalendarIcon className="mr-1 h-4 w-4" />
                                            {new Date(data?.date).toLocaleDateString()}
                                        </div>
                                        <div className="flex items-center">
                                            <UsersIcon className="mr-1 h-4 w-4" />
                                            {data?.authors}
                                        </div>
                                        <Badge variant="secondary">{data?.category}</Badge>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    {/* <Button variant="outline" size="icon" onClick={() => handleEdit()}>
                                    <EditIcon className="h-4 w-4" />
                                </Button>
                                <Button variant="destructive" size="icon" onClick={handleDelete} >
                                    <TrashIcon className="h-4 w-4" />
                                </Button> */}
                                </div>
                            </div>
                            <div className="mt-4">
                                <Button asChild variant="link" className="p-0">
                                    <a href={data?.link} target="_blank" rel="noopener noreferrer">
                                        View Full data
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))
            }



        </PageContainer >
    )
}
export default Page;