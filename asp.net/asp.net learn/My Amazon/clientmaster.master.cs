using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class clientmaster : System.Web.UI.MasterPage
{
    cartBal obal = new cartBal();
    DAL odal = new DAL();
    void fillgrid()
    {
        if (Request.Cookies["user"] != null)
        {
            obal.userid = Convert.ToInt32(Request.Cookies["user"].Values["userid"]);
            DataSet ds = odal.getcartmasterdata(obal);
            if (ds.Tables[0].Rows.Count > 0)
            {
                cart.InnerHtml = ds.Tables[0].Rows.Count.ToString();
            }
            else
            {

            }
        }
    }
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            fillgrid();
                    
            //if (Request.Cookies["cart"]!=null)
            //{
            //    cart.InnerHtml = Request.Cookies["cart"].Values["addtocart"];
            //}
            if (Request.Cookies["user"] != null)
            {
                username.InnerHtml = Request.Cookies["user"].Values["username"];
                signin.Style.Add("display", "none");
                LinkButton1.Visible = true;

            }

        }
    }

    protected void LinkButton1_Click(object sender, EventArgs e)
    {
        HttpCookie h1 = new HttpCookie("user");
         h1.Expires = System.DateTime.Now.AddHours(-2);
        Response.Cookies.Add(h1);
        Response.Redirect(Request.RawUrl);
        signin.Style.Add("display", "block");
        LinkButton1.Visible = false;
        fillgrid();
    }

    //protected void LinkButton2_Click(object sender, EventArgs e)
    //{
        //Response.Write(TextBox1.Text);
        //orderBal obal = new orderBal();
        //DAL odal = new DAL();
        //DataSet ds= odal.searchItems(obal);
        //if (ds.Tables[0].Rows.Count>0)
        //{
            

        //}






        



    //}

    protected void LinkButton2_Click1(object sender, EventArgs e)
    {
        Response.Redirect("searchmaster.aspx?order=" + TextBox1.Text);
    }

    protected void LinkButton3_Click(object sender, EventArgs e)
    {
        if (Request.Cookies["user"]!=null)
        {
            Response.Redirect("cartmaster.aspx");
        }
        else
        {
            Response.Write("<script>alert('Must login');</script>");
        }
    }

}
