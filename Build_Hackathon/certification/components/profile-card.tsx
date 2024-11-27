import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import ProfileCardSkeleton from './profile-card-skeleton'

interface ProfileCardProps {
  imageUrl: string
  firstName: string
  lastName: string
  tokenId: string
  isLoading?: boolean
}

const ProfileCard=({ imageUrl, firstName, lastName, tokenId }: ProfileCardProps)=>{
  

  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardContent className="flex flex-col items-center p-6">
        <div className="relative w-32 h-32 mb-4">
          <Image
            src={imageUrl}
            alt={`${firstName} ${lastName}`}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold text-center mb-2">{firstName} {lastName}</h2>
        <p className="text-sm text-muted-foreground mb-4">Token ID: {tokenId}</p>
        <div className="w-full h-2 bg-primary-foreground rounded-full overflow-hidden">
          <div className="h-full bg-primary" style={{ width: '100%' }}></div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProfileCard