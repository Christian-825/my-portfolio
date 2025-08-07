<template>
 <!-- Contact Section -->

 <h1 class="text-center fw-bold py-3 text-light" id="contact">Connect</h1>
 <div >
   
   <div  class="row align-items-start mb-5 p-5" >

     <!-- Map -->
     <div class="col-md-6 mt-4 map-container">
       <div >
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.4793477193176!2d120.98763231483886!3d14.580190589817643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca1c39dbfc0f%3A0x88a312041bd3b856!2sCentro%20Escolar%20University!5e0!3m2!1sen!2sph!4v1718630916645!5m2!1sen!2sph"
           style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>
     </div>
     <!-- Map -->


     <!-- Form Start-->
     <div class="col-md-6">

       <form @submit.prevent="submitForm">
         <div class="mb-3 my-4">
           <input v-model="name" type="text" class="form-control" placeholder="First Name M.I. Last Name">
         </div>
         <div class="mb-3">
           <input v-model="email" type="email" class="form-control" placeholder="Email">
         </div>
         <div class="mb-3">
           <textarea v-model="message" class="form-control" rows="5" placeholder="Message"></textarea>
         </div>

         <div class="d-flex justify-content-between align-items-center">

           <div class="icon-group">

             <a href="https://www.linkedin.com" target="_blank">
               <img class="icon-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" alt="LinkedIn">
             </a>

             <a href="https://about.gitlab.com/" target="_blank">
               <img class="icon-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Gitlab_font_awesome.svg/768px-Gitlab_font_awesome.svg.png?20170908192519" alt="GitLab">
             </a>

             <a href="https://github.com/" target="_blank">
               <img class="icon-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub">
             </a>

           </div>


           <button type="submit" class="btn btn-outline-light mb-3 px-4 rounded-pill">Submit</button>
         </div>

          <div class="d-flex justify-content-end mt-2">
              <div ref="recaptchaContainer"></div>
          </div>

       </form>

     </div>
    </div>
 </div>

 <!-- Form End -->

 <!-- Contact Section End -->
</template>


<script setup>

    import { ref, onMounted, onBeforeUnmount } from 'vue';
    import { Notyf } from 'notyf';
    import 'notyf/notyf.min.css';

    const notyf = new Notyf();
    const WEB3FORMS_ACCESS_KEY = "6be5ec16-7047-4a87-95ff-09066f339940"; //replace with your access key

    const subject = "New message from portfolio contact form";

    const name = ref("");
    const email = ref("");
    const message = ref("");

    const isLoading = ref(false);

    // The submitForm() handler function sends the form data to web3forms and displays success or failure notifications toast.
    const submitForm = async () => {

        if(!recaptchaToken.value){
            notyf.error('Please verify that you are not a robot.');
            return;
        }

        // Set the loading state to true.
        isLoading.value = true;
        try{
            // Send the form data to web3forms using fetch() API.
            // The fetch() API is used to send HTTP requests to a server.
            // Sends a POST request to the https://api.web3forms.com/submit endpoint.
            // The request body contains the form data and the web3forms access key.
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: subject,
                    name: name.value,
                    email: email.value,
                    message: message.value,
                }),
            });
            const result = await response.json();

            // Check if the form submission was successful.
            // If successful, display success notification toast.
            if (result.success) {
                console.log(result);
                // Set the loading state to false.
                isLoading.value = false;
                notyf.success("Message Sent!");
            }
        } catch (error) {

            // If not successful, display failure notification toast.
            console.log(error);
            // Set the loading state to false.
            isLoading.value = false;
            notyf.error("Failed to send message.");
        } finally {
            resetRecaptcha();
        }
    }

    /** 
 * 
 * reCaptcha Integration 
 * 
 */

const SITE_KEY = '6LfkzZIrAAAAADbA7SGk3R_zTv73z7qHvgNyS2u1';  // Replace with your site key

const recaptchaContainer = ref(null);
const recaptchaWidgetId = ref(null);
const recaptchaToken = ref('');

// Callback called by reCAPTCHA when successful
function onRecaptchaSuccess(token) {
  recaptchaToken.value = token;
}

// Callback when expired
function onRecaptchaExpired() {
  recaptchaToken.value = '';
}

// Function to render the reCAPTCHA widget
function renderRecaptcha() {
  if (!window.grecaptcha) {
    console.error('reCAPTCHA not loaded');
    return;
  }

  recaptchaWidgetId.value = window.grecaptcha.render(recaptchaContainer.value, {
    sitekey: SITE_KEY,
    size: 'normal', // or 'compact'
    callback: onRecaptchaSuccess,
    'expired-callback': onRecaptchaExpired,
  });
}

// Function to reset reCAPTCHA 
function resetRecaptcha() {
  if (recaptchaWidgetId.value !== null) {
    window.grecaptcha.reset(recaptchaWidgetId.value);
    recaptchaToken.value = '';
  }
}



onMounted(() => {
  // This code waits for the Google reCAPTCHA library to load, then renders the reCAPTCHA widget using onMounted hook. 
  // The widget is rendered with grecaptcha.render(), which requires a sitekey. 
  // Callback functions handle success and expiration events. 
  // reCAPTCHA is reset upon form submission to clear the token.
  const interval = setInterval(() => {
    if (window.grecaptcha && window.grecaptcha.render) {
      renderRecaptcha();
      clearInterval(interval);
    }
  }, 100);

  onBeforeUnmount(() => {
    clearInterval(interval);
  });
});
    
</script>
