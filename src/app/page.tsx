import CardSection from "@/components/CardSection";
import Category from "@/components/Category";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionFive from "@/components/SectionFive";
import BlogPost from "./(pages)/comments/page";

export default function Home() {
  return (
  <div>
    <Hero/>
    <Section/>
    <CardSection/>
    <Category/>
    <SectionFive/>
    <CardSection/>
    <BlogPost params={{
        slug: ""
      }}/>
  </div>  );
}
