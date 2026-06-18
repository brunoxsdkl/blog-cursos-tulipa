import Banner from "@/components/Banner"
import CourseList from "@/components/CourseList"
import CTABanner from "@/components/CTABanner"

export default function Home() {
  return (
    <>
      <Banner />
      <CourseList />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTABanner />
      </div>
    </>
  )
}
