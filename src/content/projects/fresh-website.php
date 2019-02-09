<?php include('../head.php');?>

<!-- - - - - - - - - - - - - - - - #VARIABLES - - - - - - - - - - - - - - - -->

<?php
$proj_code = "fresh-website";
$proj_title = "PSU FRESH Portfolio Show";
$header_alt_tag = "FRESH website mockup";
$proj_type = "Website";
$proj_summary = "In the last course in the PSU Graphic Design program, graduating students work together to create a portfolio show called FRESH. Each student uses their unique skills and interests to contribute to the event in a meaningful way. I was thrilled to work as the lead developer, alongside the art direction, design, and copywriting teams to create a website to serve as a means to promote the show, as well as an archive of our work.";
$proj_challenges = "Some of the main challenges were turnaround time and complexity of the existing code. We had ten weeks pull the portfolio show together (including completing our personal portfolios and displays), so there was a two week window between the date the art direction and design was solidified, and our desired launch date. I took advantage of the initial few weeks of class to familiarize myself with the existing code, and make a detailed plan for completion of the website to ensure we could meet our launch date.";
$proj_roles = "<li>Web Development</li>";
$proj_collaborators = "<li>Kate Bingaman-Burt, Advisor</li>
<li>Thom Hines, Advisor</li>
<li>Drew Hankins, Web Development</li>
<li>Tina Roach, Web Design</li>";
$proj_site = "https://psu.gd/fresh";
$proj_github = "https://github.com/tricialeach/Fresh-Site";
?>

<!-- - - - - - - - - - - - - - - - #HEADER/PROJECT SUMMARY - - - - - - - - - - - - - - - -->

<?php include('../project-header.php');?>

<!-- - - - - - - - - - - - - - - - #SIDEBAR - - - - - - - - - - - - - - - -->

      <div class="proj-sidebar  box-flex  box-sml  marg-l">
        <div class="box-half  marg-r">  
          <h4>Roles</h4>
          <ul>
            <?=$proj_roles?>
          </ul> 
        </div>
        <div class="box-half  marg-l  link-buttons">
          <a href="<?=$proj_site?>" class="button">Live Site</a>
          <a href="<?=$proj_github?>" class="button">Code / GitHub</a>
        </div>
        <div class="box-full">
          <h4>Collaborators</h4>
          <ul>
            <?=$proj_collaborators?>
          </ul>
        </div>
      </div> <!-- end proj-sidebar -->
    </div> <!--end proj-summary-->

<!-- - - - - - - - - - - - - - - - #IMAGES/CONTENT - - - - - - - - - - - - - - - -->

    <div class="proj-detail  box-flex">
      <div class="box-full marg-b">
        <img src="/img/projects/fresh-website-page1.jpg" alt="Index page of Fresh website">
      </div>
      <div class="proj-info  box-flex  box-full  marg-b">
        <div class="box-sml  marg-r">
          <h3>Technology Used</h3>
          <ul>
            <li>HTML/CSS</li>
            <li>PHP</li>
            <li>JavaScript</li>
            <li>jQuery</li>
          </ul>
        </div>
        <div class="box-lrg  marg-l">
          <h3>Development Process</h3>
          <p>The code is built upon and changed by each term's graduating class. I immediately downloaded the existing code from GitHub to see what I had to work with. Not only was the site structure more complicated than the personal projects I normally work on, but one of the consequences of having prior terms of students build upon the same code is that it had become bloated with many lines of CSS, and JavaScript files that were no longer being used. Working with another student designer and developer, we were able to launch the site on time, while meeting our objectives.
          </p>
          <h3>Objectives</h3>
          <ul>
            <li>Make the index page load faster</li>
            <li>Strip away Gulp/Sass process and go back to CSS to ensure the site remains accessible to student developers</li>
            <li>Make the entire site more responsive</li>
            <li>Leave the code better than how we found it</li>
          </ul>
        </div>
      </div>
    </div> <!--end proj-detail-->

  </main>

</div> <!-- end c-main container // header and main content -->

<?php include('../footer.php');?>