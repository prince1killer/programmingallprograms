<%@ page title="" language="C#" masterpagefile="~/Admin/Admin.master" autoeventwireup="true" inherits="Admin_FAQs_Again, App_Web_qkfkt3fd" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <h1><i class="fa fa-tag text-red"></i> FAQs
                    <%--<small>it all starts here</small>--%>
    </h1>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" runat="Server">
    <div class="col-md-offset-3 col-md-6">
        <div id="alert_placeholder">
        </div>
        <div class="form-group">
            <asp:TextBox ID="TextBox1" runat="server" CssClass="form-control" required="required"
                data-validation-required-message="Please enter Question." placeholder="Question"></asp:TextBox>
            <p class="help-block text-danger">
            </p>
        </div>
        <div class="form-group">
            <asp:TextBox ID="TextBox2" runat="server" CssClass="form-control" required="required"
                data-validation-required-message="Please enter Answer." placeholder="Answer"
                TextMode="MultiLine" Rows="5"></asp:TextBox>
            <p class="help-block text-danger">
            </p>
        </div>
        <div class="row">
            <div class="col-md-6">
            </div>
            <div class="col-md-6 text-right">
                <asp:Button ID="Button1" runat="server" Text="Save" CssClass="btn btn-primary btn-block"
                    OnClick="Button1_Click" />
            </div>
        </div>
    </div>
    <script src="js/jquery-2.1.1.min.js"></script>
    <script type="text/javascript">
        function showalert(message, alerttype) {
            $('#alert_placeholder').append('<div id="alertdiv" class="alert ' + alerttype + ' fade in"><a class="close" data-dismiss="alert">×</a><span class="text-center">' + message + '</span></div>')
            setTimeout(function () {
                $("#alertdiv").remove();
            }, 5000);
        }
    </script>
</asp:Content>
