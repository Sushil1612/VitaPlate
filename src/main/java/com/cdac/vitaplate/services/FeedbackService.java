package com.cdac.vitaplate.services;

import java.util.List;

import com.cdac.vitaplate.dto.FeedbackRequest;
import com.cdac.vitaplate.entities.Feedback;

public interface FeedbackService {

    Feedback submitFeedback(FeedbackRequest request);

    List<Feedback> getFeedbackForMom(Long momId);
}
