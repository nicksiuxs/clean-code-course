import { PostService } from "./05-dip-b";
import { JsonDataBaseService, LocalDataBaseService, webApiPostsService } from "./05-dip-c";

// Main
(async () => {
	// const provider = new LocalDataBaseService();
	// const provider = new JsonDataBaseService();
	const provider = new webApiPostsService();
	const postService = new PostService(provider);

	const posts = await postService.getPosts();

	console.log({ posts });
})();
