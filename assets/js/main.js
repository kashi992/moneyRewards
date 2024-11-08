

$(document).ready(function () {
    // testimonail slick start 
    $('.tesimonialSlick').slick({
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        swipe: true,
        swipeToSlide: true,
        dots: true,
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 1,
            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    // testimonail slick end

    $(".codeBtn").click(function (e) {
        e.preventDefault();
        $(".codeForm").hide(); // Hide all codeForm elements
        $(".codeBtn").show(); // Show all codeBtn elements

        $(this).hide(); // Hide the clicked button
        $(this).siblings(".codeForm").fadeIn(); // Fade in the associated codeForm
    });

    $(".codeForm .customBtn").click(function (e) {
        e.preventDefault(); // Prevent default action of the link

        var code = $(this).closest(".formGroup").find(".codeInput").val(); // Get the value from the input field

        if (code === "AF9U8T3") {
            // Redirect if the code is correct
            window.location.href = "Reward.html"; // Replace with your actual URL
        } else {
            // Show error message with animation if the code is incorrect
            $(this).closest(".codeForm").find(".error-message").stop(true, true).fadeIn().delay(2000).fadeOut(); // Show error message for 2 seconds
        }
    });

    $(document).ready(function () {
        // Wait for 3 seconds (3000ms) to transition to the reward section
        setTimeout(function () {
            $(".check-section").fadeOut(function () { // Hide checking section with fade effect
                $(".matchFound").fadeIn(); // Show reward content section with fade effect
            });
        }, 3000);
    });

    $(".claimBtn").click(function (e) {
        e.preventDefault();
        $(".matchFound").hide(); // Hide the clicked button
        $(".paymentSec").fadeIn(); // Hide the clicked button
    });

    $(".form-check .form-check-label").click(function (e) {
        $(this).siblings(".inputRow").fadeIn(); // Fade in the associated codeForm
        $(".connectPayment").addClass("__connect"); // Fade in the associated codeForm
        
    });

    $(".connectPayment").click(function() {
        $(".paymentSec").hide();
        // Show the hidden section
        $(".finalPayment").fadeIn();
    
        // Start the loading animation after the section is shown
        setTimeout(function() {
            $(".loading-fill").css("width", "100%"); // Animate the loading bar to 100%
            
            // Redirect to an external link after the loading bar reaches 100%
            setTimeout(function() {
                window.location.href = "https://www.example.com"; // Replace with the external URL
            }, 3000); // Adjust delay as needed (e.g., 3000ms for 3 seconds)
        }, 500); // Delay to allow the section to appear smoothly
    });
    
});

