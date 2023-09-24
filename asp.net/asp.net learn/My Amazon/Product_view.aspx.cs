using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

public partial class Product_view : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

        if (!IsPostBack)
        {

            if (Request.QueryString["edit"] != null)
            {
                ThirdBal tbal = new ThirdBal();
                tbal.thirdcatid = Convert.ToInt32(Request.QueryString["edit"]);
                DAL tdal = new DAL();
                DataSet ds = tdal.getthirdcatdatafromquerystring(tbal);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    rpt1.DataSource = ds;
                    rpt1.DataBind();
                }

            }

        }



    }

    protected void LinkButton1_Click(object sender, EventArgs e)
    {
        if (Request.Cookies["user"] == null) {
            Response.Write("<script>alert('Must Login required....');window.location.href='Login.aspx'</script>");

        }
        else
        {
            if (Request.QueryString["edit"] != null)
            {
                cartBal cbal = new cartBal();
                cbal.userid = Convert.ToInt32(Request.Cookies["user"].Values["userid"]);
                cbal.thirdcatid = Convert.ToInt32(Request.QueryString["edit"]);
                DAL cdal = new DAL();
                int res = cdal.cartinsert(cbal);
                if (res == 1)
                {

                    Response.Write("<script>alert('Your Item is Added to Cart...');window.location.href='cartmaster.aspx'</script>");

                }

            }
            else
            {
                Response.Write("<script>alert('Must Login required....');window.location.href='Login.aspx'</script>");

            }
        }


        //int count = 0;
        //if (Request.Cookies["cart"] == null)
        //{
        //    HttpCookie h1 = new HttpCookie("cart");
        //    h1.Values.Add("addtocart", "1");
        //    h1.Expires=System.DateTime.Now.AddHours(-2);
        //    Response.Cookies.Add(h1);
        //    Response.Redirect(Request.RawUrl);

        //}
        //else
        //{
        //     int count=Convert.ToInt32(Request.Cookies["cart"].Values["addtocart"])+1;
        //    //Request.Cookies["cart"].Values["addtocart"] = count.ToString();
        //    HttpCookie h1 = new HttpCookie("cart");
        //    h1.Values.Add("addtocart", count.ToString());
        //    h1.Expires = System.DateTime.Now.AddHours(-2);
        //    Response.Cookies.Add(h1);
        //    Response.Redirect(Request.RawUrl);
        //}



    }

    protected void LinkButton2_Click(object sender, EventArgs e)
    {
        if (Request.Cookies["user"] != null)
        {
            Response.Redirect("confirmordermaster.aspx?orderid=" + Request.QueryString["edit"]);
        }
        else
        {
            Response.Write("<script>alert('Must Login Required To Buy...');window.location.href='Default.aspx'</script>");
        }

    }
}