
const AddStudent = () => {
    const handleAddStudent = async (event) => {
      event.preventDefault();
  
      const form = event.target;
      const formData = new FormData();
  
      formData.append("name", form.name.value);
      formData.append("no", form.no.value);
      formData.append("fName", form.fName.value);
      formData.append("nid", form.nid.value);
      formData.append("mName", form.mName.value);
      formData.append("mNid", form.mNid.value);
      formData.append("mNumber", form.mNumber.value);
      formData.append("admit", form.admit.value);
      formData.append("previous", form.previous.value);
      formData.append("photo", form.photo.files[0]); // Upload file
  
      try {
        const response = await fetch("https://adampur-server-fullstack-3.onrender.com/student", {
          method: "POST",
          body: formData, // Send formData directly
        });
  
        const data = await response.json();
        if (response.ok) {
          alert("Student added successfully!");
          console.log("Image Filename:", data.imageFilename);
          form.reset();
        } else {
          alert(`Error: ${data.error}`);
        }
      } catch (error) {
        console.error("Error adding student:", error);
        alert("Failed to add student.");
      }
    };
  
    return (
      <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-center text-3xl font-extrabold mb-5">
          নতুন শিক্ষার্থী যুক্ত / ভর্তি করুন
        </h2>
        <form onSubmit={handleAddStudent} encType="multipart/form-data">
          {/* Student Name & Birth Reg Number */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label>
                <span className="label-text">শিক্ষার্থীর নাম</span>
              </label>
              <input type="text" name="name" className="input input-bordered w-full" required />
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label>
                <span className="label-text">শিক্ষার্থীর জন্ম নিবন্ধন নম্বর</span>
              </label>
              <input type="number" name="no" className="input input-bordered w-full" required />
            </div>
          </div>
  
          {/* Father Name & NID */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label>
                <span className="label-text">পিতার নাম</span>
              </label>
              <input type="text" name="fName" className="input input-bordered w-full" required />
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label>
                <span className="label-text">পিতার জাতীয় পরিচয়পত্র নম্বর</span>
              </label>
              <input type="number" name="nid" className="input input-bordered w-full" />
            </div>
          </div>
  
          {/* Mother Name & NID */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label>
                <span className="label-text">মাতার নাম</span>
              </label>
              <input type="text" name="mName" className="input input-bordered w-full" required />
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label>
                <span className="label-text">মাতার জাতীয় পরিচয়পত্র নম্বর</span>
              </label>
              <input type="number" name="mNid" className="input input-bordered w-full" />
            </div>
          </div>
  
          {/* Mobile Number & Photo Upload */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label>
                <span className="label-text"> মোবাইল নম্বর</span>
              </label>
              <input type="text" name="mNumber" className="input input-bordered w-full" required />
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label>
                <span className="label-text">শিক্ষার্থীর ছবি আপলোড করুন</span>
              </label>
              <input type="file" name="photo" className="input input-bordered w-full" accept="image/*" required />
            </div>
          </div>
  
          {/* Class & Previous Institution */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label>
                <span className="label-text">যে শ্রেণিতে ভর্তি হতে ইচ্ছুক</span>
              </label>
              <input type="text" name="admit" className="input input-bordered w-full" required />
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label>
                <span className="label-text">পূর্ববর্তী শিক্ষা প্রতিষ্ঠানের নাম</span>
              </label>
              <input type="text" name="previous" className="input input-bordered w-full" />
            </div>
          </div>
  
          <input type="submit" value="জমা দিন" className="btn btn-block bg-pink-200" />
        </form>
      </div>
    );
  };
  
  export default AddStudent;
  

