import storyImage from "../assets/story1.png";

function Story() {
  return (
    <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 bg-black-200/22">
            <div className="grid lg:grid-cols-2 md:gap-80 items-center">
                {/* Left Side of our page */}
                <div>
                    <h3 className="text-[#D4AF37] uppercase font-semibold text-xl mb-8">
                        Our Story
                    </h3>
                    <h2 className="text-white text-2xl lg:text-3xl font-bold uppercase leading-tight mb-10">
                        From Vision
                        <br/>
                        To Reality
                    </h2>
                    <p className="text-gray-300 leading-8">
                        LORDPART POINT GLOBAL LIMITED was founded with a clear purpose to
                        deliver construction solutions that combines quality,
                        innovation, and integrity. From residential and commercial
                        developments to infrastructure projects, we have consistently
                        transformed ideas into durable structures that serve communities
                        and businesses alike.
                    </p>
                </div>

                {/* Right side of our page */}
                <div>
                    <img
                        src={storyImage}
                        alt="Construction Site"
                        className="w-screen h-100 object-cover"
                    />
                </div>
            </div>
        </div>
    </section>
  );
}

export default Story;