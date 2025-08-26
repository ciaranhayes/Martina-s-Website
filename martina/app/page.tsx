import Header from "@/components/header"
import ContentContainer from "@/components/items-containers"
import ContentContainerColoured from "@/components/item-contain-coloured"
import ContentContainerWithPhoto from "@/components/container-with-photo"

export default function Page() {
  return (
    <>
      <Header />
      <ContentContainer />
      <ContentContainerColoured />
      <ContentContainerWithPhoto url="/photo1.jpg" alt="image"/>
    </> 
  )
}