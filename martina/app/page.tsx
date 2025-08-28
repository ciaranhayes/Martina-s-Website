import Header from "@/components/header"
import HeaderFront from "@/components/headerFront"
import ContentContainer from "@/components/items-containers"
import ContentContainerColoured from "@/components/item-contain-coloured"
import ContentContainerWithPhotoLeft from "@/components/container-with-photo"
import Footer from "@/components/footer"

const posts = [
    {
        id: 1,
        title: 'Education',
        href: '/education',
        description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.',
    },
    {
        id: 2,
        title: 'Performance',
        href: '/performance-flute',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.',
    },
    {
        id: 3,
        title: 'Artistic Management',
        href: '/arts-management',
        description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.',
    },
    {
        id: 4,
        title: 'Academic Research',
        href: '/research',
        description:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.',
    }
]

export default function Page() {
  return (
    <>
      <HeaderFront />
      <ContentContainer posts={posts} />
      <ContentContainerColoured />
      <ContentContainerWithPhotoLeft url="/photo1.jpg" alt="image"/>
      <Footer />
    </> 
  )
}