<%@ page language="C#" autoeventwireup="true" inherits="_Default, App_Web_hweh0vvk" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>G-Indicator</title>

    <!-- Bootstrap Core CSS -->
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Font Awesome CSS -->
    <link href="css/font-awesome.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/animate.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/style.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>


    <!-- Template js -->
    <script src="js/jquery-2.1.1.min.js" type="text/javascript"></script>
    <script src="bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="js/jquery.appear.js" type="text/javascript"></script>
    <script src="js/contact_me.js" type="text/javascript"></script>
    <script src="js/jqBootstrapValidation.js" type="text/javascript"></script>
    <script src="js/modernizr.custom.js" type="text/javascript"></script>
    <script src="js/script.js" type="text/javascript"></script>

    <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
</head>
<body>
    <form id="form1" runat="server">
        <!-- Start Logo Section -->
        <section id="logo-section" class="text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="logo text-center">
                            <h1>G-Indicator</h1>
                            <span>The Route for Destination</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Logo Section -->

        <!-- Start Main Body Section -->
        <div class="mainbody-section text-center">
            <div class="container">
                <div class="row">

                    <div class="col-md-3">
                        <div class="menu-item color">
                            <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/Login.aspx">
                                <i class="fa fa-lock"></i>
                                <p>Login</p>
                            </asp:HyperLink>
                        </div>

                        <div class="menu-item blue">
                            <asp:LinkButton ID="LinkButton1" runat="server" OnClick="LinkButton1_Click">
                                <i class="fa fa-bus"></i>
                                <p>Bus</p>
                            </asp:LinkButton>
                        </div>

                        <%--  <div class="menu-item green">
                            <asp:HyperLink ID="HyperLink3" runat="server" NavigateUrl="~/routeFinder.aspx">
                                <i class="fa fa-car"></i>
                                <p>Car</p>
                            </asp:HyperLink>
                        </div>--%>
                    </div>

                    <div class="col-md-6">

                        <!-- Start Carousel Section -->
                        <div class="home-slider">
                            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" style="padding-bottom: 30px;">
                                <!-- Indicators -->
                                <ol class="carousel-indicators">
                                    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                                </ol>

                                <!-- Wrapper for slides -->
                                <div class="carousel-inner">
                                    <div class="item active">
                                        <img src="images/myimg/slide01.jpg" class="img-responsive" alt="" style="height:315px;">
                                    </div>
                                    <div class="item">
                                        <img src="images/myimg/slide02.jpg" class="img-responsive" alt="" style="height:315px;">
                                    </div>
                                    <div class="item">
                                        <img src="images/myimg/slide03.jpg" class="img-responsive" alt="" style="height:315px;">
                                    </div>

                                </div>

                            </div>
                        </div>
                        <!-- Start Carousel Section -->

                        

                    </div>

                    <div class="col-md-3">


                        <div class="menu-item teal">
                            <asp:HyperLink ID="HyperLink8" runat="server" NavigateUrl="~/FAQs.aspx">
                                <i class="fa fa-question"></i>
                                <p>FAQs</p>
                            </asp:HyperLink>
                        </div>

                        <div class="menu-item color ">
                              <asp:LinkButton ID="LinkButton2" runat="server" OnClick="LinkButton2_Click" >
                              <i class="fa fa-taxi"></i>
                                        <p>Private Vehicle</p>
                            </asp:LinkButton>
                           
                        </div>
                        <%-- <div class="menu-item light-red">
                            <asp:HyperLink ID="HyperLink5" runat="server" NavigateUrl="~/routeFinder.aspx">
                                <i class="fa fa-train"></i>
                                <p>Train</p>
                            </asp:HyperLink>
                        </div>--%>
                    </div>
                </div>
                <div class="row">
                            <div class="col-md-6">
                                <div class="menu-item light-blue responsive">
                                    <asp:HyperLink ID="HyperLink6" runat="server" NavigateUrl="~/contact.aspx">
                                <i class="fa fa-envelope-o"></i>
                                <p>Contact</p>
                                    </asp:HyperLink>
                                </div>

                            </div>

                            <div class="col-md-6">
                                <div class="menu-item indian-red responsive-2">
                                    <asp:HyperLink ID="HyperLink7" runat="server" NavigateUrl="~/feedBack.aspx">
                                <i class="fa fa-comments-o"></i>
                                <p>Feedback</p>
                                    </asp:HyperLink>

                                </div>
                               
                            </div>

                        </div>
            </div>
        </div>
        <!-- End Main Body Section -->

        <!-- Start Copyright Section -->
        <div class="copyright text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div>copyright &copy;<a href="#"> 2016</a> </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Copyright Section -->
    </form>
</body>
</html>
