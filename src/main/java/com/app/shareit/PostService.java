package com.app.shareit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Date;
@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Post getPost(int id) {
        return postRepository.findById(id).orElse(null);
    }

    public Post createPost(Post post) {
        post.setDate(new Date());
        post.setDate(new Date());
        String message = post.getMessage();
        String cleanedMessage = message.replaceAll("<.*?>", "");
        post.setMessage(cleanedMessage);
        return postRepository.save(post);
    }

    public Post updatePost(int id, Post post) {
        Post existingPost = getPost(id);
        if(existingPost != null) {
            existingPost.setMessage(post.getMessage());
            existingPost.setUsername(post.getUsername());
            return postRepository.save(existingPost);
        }
        return null;
    }

    public void deletePost(int id) {
        postRepository.deleteById(id);
    }

}
