package com.cdac.vitaplate.serviceImpl;

import com.cdac.vitaplate.entities.Review;
import com.cdac.vitaplate.repositories.ReviewRepository;
import com.cdac.vitaplate.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Override
    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }

    @Override
    public Review updateReview(Long id, Review updatedReview) {
        return reviewRepository.findById(id).map(existingReview -> {
            existingReview.setOrder(updatedReview.getOrder());
            existingReview.setRating(updatedReview.getRating());
            existingReview.setComments(updatedReview.getComments());
            // createdAt is set only once during creation
            return reviewRepository.save(existingReview);
        }).orElseThrow(() -> new RuntimeException("Review not found with id: " + id));
    }

    @Override
    public Optional<Review> getReviewById(Long id) {
        return reviewRepository.findById(id);
    }

    @Override
    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    @Override
    public void deleteReview(Long id) {
        if (!reviewRepository.existsById(id)) {
            throw new RuntimeException("Review not found with id: " + id);
        }
        reviewRepository.deleteById(id);
    }
}

