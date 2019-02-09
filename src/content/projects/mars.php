<?php include('../head.php');?>

<!-- - - - - - - - - - - - - - - - #VARIABLES - - - - - - - - - - - - - - - -->

<?php
$proj_code = "mars";
$proj_title = "Mars Tour Poster";
$header_alt_tag = "Interactive poster for a Mars tour";
$proj_type = "Website";
$proj_summary = "An interactive reinterpretation of a print poster from NASA's <a href=\"https://www.jpl.nasa.gov/visions-of-the-future/\">Visions of the Future</a> travel series (courtesy NASA/JPL-Caltech). This was an exercise in learning CSS transforms, animations, and jQuery. This project sparked an interest and future experimentations in motion and interactivity for the web.";
$proj_challenges = "INSERT.";
?>

<!-- - - - - - - - - - - - - - - - #HEADER/PROJECT SUMMARY - - - - - - - - - - - - - - - -->

<?php include('../project-header.php');?>

<!-- - - - - - - - - - - - - - - - #SIDEBAR - - - - - - - - - - - - - - - -->

      <div class="proj-sidebar  box-flex  box-sml  marg-l">
        <div class="box-half  marg-r">  
          <h4>Roles</h4>
          <ul>
            <li>Web Development</li>
          </ul> 
        </div>
        <div class="box-half  marg-l  link-buttons">
          <a href="http://tricia.ws/psu/341/project3/" class="button">Live Site</a>
          <!-- <a href="INSERT" class="button">Code / GitHub</a> -->
        </div>
        <div class="box-full">
          <h4>Collaborators</h4>
          <ul>
            <li>Thom Hines: Advisor</li>
          </ul>
        </div>
      </div> <!-- end proj-sidebar -->
    </div> <!--end proj-summary-->

<!-- - - - - - - - - - - - - - - - #IMAGES/CONTENT - - - - - - - - - - - - - - - -->

    <div class="proj-detail  box-flex">
      <!-- <div class="box-full  marg-b">
        <img src="/img/projects/mars-detail1.gif" width="100%" alt="Mars poster detail">
      </div> -->
      <div class="box-lrg  marg-r">
        <img src="/img/projects/mars-detail2.gif" width="100%" alt="Mars poster detail">
      </div>
      <div class="box-sml  marg-l">
        <img src="/img/projects/mars2.jpg" width="100%" alt="Mars poster detail">  
      </div>
      <div class="box-full">
        <img src="/img/projects/mars-detail4.gif" width="100%" alt="Mars poster detail">  
      </div>

    </div> <!--end proj-detail-->

  </main>

</div> <!-- end c-main container // header and main content -->

<?php include('../footer.php');?>