import { Parallax } from 'react-parallax';
const Cover = ({ img, title }) => {
    return (

        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero h-[700px]" style={{ backgroundImage: `url("${img}")`, }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5"> এই প্রতিষ্ঠানে অনুদান পাঠাতে চাইলে এই ওয়েবসাইটের মাধ্যমে জমা দেওয়া যাবে। স্কুল ড্রেসের জন্য লোগো কিংবা স্কাউট লোগো এখান থেকে ক্রয় করা যাবে। এছাড়াও স্কাউট চাঁদা কিংবা শিক্ষা সফরের জন্য নির্ধারিত অর্থ প্রদান করা যেতে পারে।
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>

    )
}

export default Cover