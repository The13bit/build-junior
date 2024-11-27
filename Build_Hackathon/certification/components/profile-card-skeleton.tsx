import { Card, CardContent } from "@/components/ui/card"

const  ProfileCardSkeleton=() =>{
  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardContent className="flex flex-col items-center p-6">
        <div className="w-32 h-32 rounded-full bg-gray-200 animate-pulse mb-4"></div>
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4 animate-pulse"></div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden animate-pulse"></div>
      </CardContent>
    </Card>
  )
}
export default ProfileCardSkeleton

