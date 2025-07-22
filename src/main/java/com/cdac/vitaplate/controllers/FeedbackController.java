package com.cdac.vitaplate.controllers;

import com.cdac.vitaplate.dto.FeedbackRequest;
import com.cdac.vitaplate.entities.Feedback;
import com.cdac.vitaplate.services.FeedbackService;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/feedbacks")
@RequiredArgsConstructor
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @PostMapping("/submit")
    public ResponseEntity<Feedback> submitFeedback(@RequestBody FeedbackRequest request) {
        return ResponseEntity.ok(feedbackService.submitFeedback(request));
    }

    @GetMapping("/mom/{momId}")
    public ResponseEntity<List<Feedback>> getFeedbackForMom(@PathVariable Long momId) {
        return ResponseEntity.ok(feedbackService.getFeedbackForMom(momId));
    }
}
