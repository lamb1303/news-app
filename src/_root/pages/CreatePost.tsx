import PostForm from "@/components/forms/PostForm";

const CreatePost = () => {
  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <div className="bg-[#F8F8F8] p-2 rounded-lg">
            <img
              src="/assets/icons/add-post.svg"
              width={36}
              height={36}
              alt="add"
              className="invert-[0.2]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="h3-bold md:h2-bold text-[#1A1A1A]">Crear Noticia</h2>
            <p className="text-[#666666] small-regular">Comparte tu noticia con el mundo</p>
          </div>
        </div>

        <div className="w-full max-w-5xl bg-white rounded-2xl border border-[#E5E5E5] p-6">
          <PostForm action="Crear" />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
