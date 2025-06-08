package com.cdac.vitaplate.services;

import com.cdac.vitaplate.entities.Review;

import java.util.List;
import java.util.Optional;

public interface ReviewService {
    Review createReview(Review review);
    Review updateReview(Long id, Review review);
    Optional<Review> getReviewById(Long id);
    List<Review> getAllReviews();
    void deleteReview(Long id);
}
