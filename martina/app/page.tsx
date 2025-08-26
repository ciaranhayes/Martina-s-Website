import Header from "@/components/header"
import HeaderFront from "@/components/headerFront"
import ContentContainer from "@/components/items-containers"
import ContentContainerColoured from "@/components/item-contain-coloured"
import ContentContainerWithPhotoLeft from "@/components/container-with-photo"
import ContentContainerWithPhotoRight from "@/components/container-photo-right"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <>
      <HeaderFront />
      <ContentContainer />
      <ContentContainerColoured />
      <ContentContainerWithPhotoLeft url="/photo1.jpg" alt="image"/>
      <ContentContainerWithPhotoRight url="/photo1.jpg" alt="image"/>
      <Footer />
    </> 
  )
}