import React from 'react';
import Footer from './Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-[#EDF2F4] p-8">
      <h1 className="text-5xl font-bold text-center text-[#2B2D42] mb-8">About Reef QR</h1>
      
      <div className="max-w-4xl mx-auto text-lg text-[#2B2D42] space-y-8">
        <section>
          <h2 className="text-3xl font-semibold text-[#EF233C] mb-4">Our Mission</h2>
          <p>
            At Reef QR, we are dedicated to revolutionizing the way aquatic enthusiasts and fish hobbyists care for their freshwater and saltwater species.
            With a simple scan of a QR code, we provide instant access to reliable, expert-curated information about over 1,200 species of fish.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#EF233C] mb-4">How it Works</h2>
          <p>
            Each of our QR codes links directly to a species-specific care guide, offering detailed information on the origin of the fish, maximum size,
            water parameters, compatibility with other species, and much more. Whether you’re a beginner or an experienced hobbyist, Reef QR offers
            a convenient way to identify fish and learn how to care for them in real time.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#EF233C] mb-4">Why We Started</h2>
          <p>
            Reef QR was founded to address the gap in accessible and trustworthy information about aquatic life. Many new fish keepers struggle with
            misinformation, leading to unhealthy environments for their pets. Our team of passionate aquatic enthusiasts, backed by scientific research
            and years of experience, aims to consolidate and share the best knowledge available.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#EF233C] mb-4">Who We Help</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Aquatic Hobbyists:</strong> Whether you’re setting up your first fish tank or managing multiple aquariums, our platform makes it
              easy to find the care instructions you need to keep your fish thriving.
            </li>
            <li>
              <strong>Local Fish Shops:</strong> We collaborate with fish shops to offer our QR code system, helping shop owners educate their
              customers quickly and effectively about the species they sell.
            </li>
            <li>
              <strong>Conservation Efforts:</strong> By promoting responsible fishkeeping, we also aim to contribute to the conservation of aquatic
              ecosystems, ensuring that species are cared for properly in captivity.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#EF233C] mb-4">Our Broader Impact</h2>
          <p>
            We believe that proper care for aquatic life can have far-reaching effects, not just on individual pets but on global ecosystems.
            As a nonprofit, we focus on the following key areas:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Aquatic Conservation:</strong> By ensuring that fish are properly cared for in captivity, we help reduce the strain on wild
              populations and contribute to the preservation of vulnerable species.
            </li>
            <li>
              <strong>Education and Outreach:</strong> Our work extends beyond hobbyists—we collaborate with local schools, universities, and research
              institutions to raise awareness about aquatic ecosystems and responsible fishkeeping.
            </li>
            <li>
              <strong>Community Engagement:</strong> We partner with local fish shops and aquariums to provide tools that enhance customer education,
              making it easier for businesses to support responsible fish ownership and conservation efforts.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-[#EF233C] mb-4">Our Vision for the Future</h2>
          <p>
            As a nonprofit, Reef QR seeks to grow our impact by expanding our reach to more species, ecosystems, and communities. In the coming years,
            we aim to:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Expand our Database:</strong> We plan to grow our species library to include all commonly kept freshwater and marine species, as
              well as information on their wild habitats.
            </li>
            <li>
              <strong>Launch Conservation Programs:</strong> We intend to support conservation initiatives, including captive breeding programs, habitat
              restoration efforts, and educational campaigns on protecting endangered species.
            </li>
            <li>
              <strong>Develop Training Programs:</strong> We are creating workshops and resources for fish shop owners, schools, and hobbyists, teaching
              responsible fishkeeping practices and environmental stewardship.
            </li>
            <li>
              <strong>Form Global Partnerships:</strong> We are building relationships with aquariums, conservation organizations, and research
              institutions worldwide to further our goals of education and aquatic life preservation.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;