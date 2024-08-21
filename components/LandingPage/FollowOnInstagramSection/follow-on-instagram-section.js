import InstagramImage from "./InstagramImage/instagram-image";

export default function FollowOnInstagram() {
    return(
        <div className="w-9/12 flex flex-col items-center justify-between my-4 gap-8">
            <h1 className="font-bold text-3xl">Follow Products And Discounts On Instagram</h1>
            <div className="flex items-center justify-center gap-4">
                <InstagramImage />
            </div>
        </div>
    );
}