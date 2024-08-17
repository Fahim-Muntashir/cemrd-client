import Container from "@/components/Shared/Container";
import {
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaResearchgate,
    FaYoutube,
} from "react-icons/fa";

const About = () => {
    return (
        <Container>
            <section className="bg-white dark:bg-gray-900">
                <div className="gap-16 items-center py-8 mx-auto lg:grid lg:grid-cols-2 lg:py-16 ">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Your Vision, Our Expertise in Renovation.
                        </h2>
                        <p className="mb-4 text-justify">
                            Center for Multidisciplinary Research and Development (CeMRD) is a
                            Research and Development organization founded by Mr. Mahmudul
                            Hasan. It starts journey at 08 October 2021 with some research
                            ehthesious person. The research organization was founded with a
                            vision to propel innovation and knowledge advancement. Its
                            inception stems from a collective passion for exploration and a
                            commitment to solving complex problems.
                        </p>
                        <p>
                            We focused on fostering collaboration and leveraging diverse
                            expertise, the organization aspires to be a catalyst for
                            groundbreaking discoveries that positively impact society and
                            contribute to the global scientific community.
                        </p>
                        <ul className="flex mt-7  justify-start gap-6 text-3xl">
                            <li className="hover:text-black">
                                <a
                                    href="https://www.facebook.com/groups/2148952108677508"
                                    target="blank"
                                >
                                    <FaFacebook></FaFacebook>
                                </a>
                            </li>
                            <li className="hover:text-black">
                                <a
                                    href="https://www.youtube.com/@MahmudulHasanMoon"
                                    target="blank"
                                >
                                    <FaYoutube></FaYoutube>
                                </a>
                            </li>
                            <li className="hover:text-black">
                                <a href="https://www.linkedin.com/company/cemrd" target="blank">
                                    <FaLinkedin></FaLinkedin>
                                </a>
                            </li>
                            <li className="hover:text-black">
                                <a href="">
                                    <FaGithub></FaGithub>
                                </a>
                            </li>
                            <li className="hover:text-black">
                                <a href="https://www.researchgate.net/lab/Center-for-Multidisciplinary-Research-and-Development-CeMRD-Mahmudul-Hasan">
                                    <FaResearchgate />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img
                            className="w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                            alt="office content 1"
                        />
                        <img
                            className="mt-4 w-full lg:mt-10 rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                            alt="office content 2"
                        />
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default About;