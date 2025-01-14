
const AddStudent = () => {
    const handleAddStudent = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const no = form.no.value;
        const fName = form.fName.value;
        const nid = form.nid.value;
        const mName = form.mName.value;
        const mNid = form.mNid.value;
        const mNumber = form.mNumber.value;
        const photo = form.photo.value;
        const admit = form.admit.value;
        const previous = form.previous.value;

        const newStudent = { name, no, fName, nid, mName, mNid, mNumber, photo, admit, previous}
        // console.log(newStudent);
    // send data to server
    fetch('http://localhost:5000/student', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newStudent)
    })

    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    }
  return (
    <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-center text-3xl font-extrabold mb-5">নতুন শিক্ষার্থী যুক্ত / ভর্তি করুন</h2>
        <form onSubmit={handleAddStudent}>
            {/* form student and birth reg number row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="">
                        <span className="label-text">শিক্ষার্থীর নাম</span>
                    </label>
                    <label className="input-group">
                        <input type="text"name="name" placeholder="শিক্ষার্থীর নাম" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                <label className="">
                        <span className="label-text"> শিক্ষার্থীর জন্ম নিবন্ধন নম্বর</span>
                    </label>
                    <label className="input-group">
                        <input type="number"name="no" placeholder=" শিক্ষার্থীর জন্ম নিবন্ধন নম্বর" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form-father name and NID row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                <label className="">
                        <span className="label-text">পিতার নাম</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="fName" placeholder="পিতার নাম" className="input input-bordered w-full" />
                    </label>  
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="">
                        <span className="label-text">পিতার জাতীয় পরিচয়পত্র নম্বর</span>
                    </label>
                    <label className="input-group">
                        <input type="number" name="nid" placeholder="পিতার জাতীয় পরিচয়পত্র নম্বর" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form-mother name an NID row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                <label className="">
                        <span className="label-text">মাতার নাম</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="mName" placeholder="মাতার নাম" className="input input-bordered w-full" />
                    </label>  
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="">
                        <span className="label-text">মাতার জাতীয় পরিচয়পত্র নম্বর</span>
                    </label>
                    <label className="input-group">
                        <input type="number" name="mNid" placeholder="মাতার জাতীয় পরিচয়পত্র নম্বর" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form-photo url and father or mother moblile number row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                <label className="">
                        <span className="label-text"> মোবাইল নম্বর</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="mNumber" placeholder=" মোবাইল নম্বর" className="input input-bordered w-full" />
                    </label>  
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="">
                        <span className="label-text">শিক্ষার্থীর ছবির URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" placeholder="শিক্ষার্থীর ছবির URL" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form-class where want to get addmitted and previous institution row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                <label className="">
                        <span className="label-text"> যে শ্রেণিতে ভর্তি হতে ইচ্ছুক</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="admit" placeholder="যে শ্রেণিতে ভর্তি হতে ইচ্ছুক" className="input input-bordered w-full" />
                    </label>  
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="">
                        <span className="label-text">পূর্ববর্তী শিক্ষা প্রতিষ্ঠানের নাম</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="previous" placeholder="পূর্ববর্তী শিক্ষা প্রতিষ্ঠানের নাম" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
<input type="submit" value="জমা দিন" className="btn btn-block bg-pink-200" />
        </form>
    </div>
  )
}

export default AddStudent