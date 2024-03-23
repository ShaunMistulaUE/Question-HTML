<?php
// Get form data
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

// Replace with your actual email address and recipient email
$recipient = "vcrp00l@gmail.com";

// Create email content
$subject = "Website Message from " . $name;
$body = "Name: " . $name . "\nEmail: " . $email . "\n\nMessage:\n" . $message;

// Send email using PHP mail function (you may need to configure your server)
$mailSent = mail($recipient, $subject, $body);

if ($mailSent) {
  echo "Message sent successfully!";
} else {
  echo "Error sending message. Please try again later.";
}
?>