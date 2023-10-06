using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Globalization;

public partial class Client_clientcart : System.Web.UI.Page
{
    SqlCommand cmd;
    SqlConnection cn;
    SqlDataAdapter da;
    DataSet ds;

    void mycon()
    {
        cn = new SqlConnection(@"Data Source=(LocalDB)\v11.0;AttachDbFilename=C:\MasterPage\App_Data\ecommerce.mdf;Integrated Security=True");

        //cn = new SqlConnection(@"Data Source=(LocalDB)\v11.0;AttachDbFilename=D:\New E drive\MasterPage\App_Data\ecommerce.mdf;Integrated Security=True");

        cn.Open();
    }

    void cartsum()
    {
        mycon();

        cmd = new SqlCommand("select sum(productprice) as pp , sum(quantity) as pqty from addtocart where clientid=@id", cn);
        cmd.Parameters.AddWithValue("@id", Session["clientlogin"]);
        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        if (ds.Tables[0].Rows.Count > 0)
        {
            total.InnerText = ds.Tables[0].Rows[0]["pp"].ToString();
            grandtotal.InnerText = ds.Tables[0].Rows[0]["pp"].ToString();
            qty.InnerText = ds.Tables[0].Rows[0]["pqty"].ToString();
        }

    }

    void loadcart()
    {
        mycon();

        cmd = new SqlCommand("select * from addtocart where clientid=@id", cn);
        cmd.Parameters.AddWithValue("@id", Session["clientlogin"]);

        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        if (ds.Tables[0].Rows.Count > 0)
        {
            cartproductdetail.DataSource = ds;
            cartproductdetail.DataBind();
        }
    }
    protected void Page_Load(object sender, EventArgs e)
    {
        mycon();


        if (Request.QueryString["delete"]!=null)
        {
            cmd = new SqlCommand("delete from addtocart where id=@id", cn);
            cmd.Parameters.AddWithValue("@id", Request.QueryString["delete"]);

            cmd.ExecuteNonQuery();
            loadcart();            
        }
        else
        {
            loadcart();
        }
        cartsum();

        if (IsPostBack==false)
        {
            loadshipping();
        }

       
    }

    void addtocart()
    {
        mycon();
        cmd = new SqlCommand("select addtocart.*,shippingdetail.shipid from addtocart left join shippingdetail on addtocart.clientid=shippingdetail.client_id where clientid=@id", cn);
        cmd.Parameters.AddWithValue("@id", Session["clientlogin"]);

        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

    }

    protected void checkoutbtn_Click(object sender, EventArgs e)
    {
        mycon();

        int i;

        cmd = new SqlCommand("select count(id) as countid from addtocart where clientid=@id", cn);
        cmd.Parameters.AddWithValue("@id", Session["clientlogin"]);

        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);


        var lcount = ds.Tables[0].Rows[0]["countid"];

        Random r1 = new Random();

        var random = (r1.Next(10000, 99999)).ToString();

        for (i = 0; i < Convert.ToInt32(lcount); i++)
        {
            addtocart();

           

            cmd = new SqlCommand("insert into ordertable values (@pid,@invoice,@cid,@price,@qty,@shipping,@paymode,@paystatus,@pimg,@date)", cn);

            cmd.Parameters.AddWithValue("@pid", ds.Tables[0].Rows[i]["productid"]);
            cmd.Parameters.AddWithValue("@invoice", random);
            cmd.Parameters.AddWithValue("@cid", ds.Tables[0].Rows[i]["clientid"]);
            cmd.Parameters.AddWithValue("@price", ds.Tables[0].Rows[i]["productprice"]);
            cmd.Parameters.AddWithValue("@qty", ds.Tables[0].Rows[i]["quantity"]);
            cmd.Parameters.AddWithValue("@shipping", ds.Tables[0].Rows[i]["shipid"]);

            if (cod.Checked==true)
	        {
		         cmd.Parameters.AddWithValue("@paymode",cod.Text);
	        }
            else
            {
                cmd.Parameters.AddWithValue("@paymode", upi.Text);
            }

            cmd.Parameters.AddWithValue("@paystatus", "Pending");

            if (FileUpload1.HasFile)
            {
                var path = "~/payment receipt/" + FileUpload1.FileName;
                FileUpload1.SaveAs(Server.MapPath("~/payment receipt/" + FileUpload1.FileName));
                cmd.Parameters.AddWithValue("@pimg", path);
            }
            else
            {
                cmd.Parameters.AddWithValue("@pimg", "null");
            }

            CultureInfo culture = new CultureInfo("es-ES");
            String mydate = System.DateTime.Now.ToString();
            DateTime date = DateTime.Parse(mydate, culture);

            var dt = date.ToString("dd-MM-yyyy");

            cmd.Parameters.AddWithValue("@date",Convert.ToDateTime(dt));
             

            cmd.ExecuteNonQuery();
        }

        cmd = new SqlCommand("delete from addtocart where clientid=@id", cn);
        cmd.Parameters.AddWithValue("@id", Session["clientlogin"]);

        cmd.ExecuteNonQuery();

       
    }

    void loadshipping()
    {
         mycon();

         cmd = new SqlCommand("select * from shippingdetail where client_id=@id", cn);
         cmd.Parameters.AddWithValue("@id", Session["clientlogin"]);
         da = new SqlDataAdapter(cmd);
         ds = new DataSet();
         da.Fill(ds);

         if (ds.Tables[0].Rows.Count>0)
         {
             firstname.Text = ds.Tables[0].Rows[0]["firstname"].ToString();
             lastname.Text = ds.Tables[0].Rows[0]["lastname"].ToString();
             email.Text = ds.Tables[0].Rows[0]["email"].ToString();
             add1.Text = ds.Tables[0].Rows[0]["address1"].ToString();
             zip.Text = ds.Tables[0].Rows[0]["zipcode"].ToString();
             country.Text = ds.Tables[0].Rows[0]["country"].ToString();
             state.Text = ds.Tables[0].Rows[0]["state"].ToString();
             mobile.Text = ds.Tables[0].Rows[0]["mobile"].ToString();
             altmobile.Text = ds.Tables[0].Rows[0]["alternativemobile"].ToString();

         }


         cmd.ExecuteNonQuery();
    }

    void change()
    {
        mycon();


        cn.Close();
    }

    protected void shippingbtn_Click(object sender, EventArgs e)
    {
        mycon();

         cmd = new SqlCommand("select * from shippingdetail where client_id=@id", cn);
         cmd.Parameters.AddWithValue("@id", Session["clientlogin"]);
         da = new SqlDataAdapter(cmd);
         ds = new DataSet();
         da.Fill(ds);

         if (ds.Tables[0].Rows.Count > 0)
         {
             Response.Write("<script>alert('Updated')</script>");
             cmd = new SqlCommand("update shippingdetail set firstname=@firstname,lastname=@lastname,email=@email,address1=@address1,zipcode=@zipcode,country=@country,state=@state,mobile=@mobile,alternativemobile=@alternativemobile where client_id=@clientid", cn);
             cmd.Parameters.AddWithValue("@firstname", firstname.Text);
             cmd.Parameters.AddWithValue("@lastname", lastname.Text);
             cmd.Parameters.AddWithValue("@email", email.Text);
             cmd.Parameters.AddWithValue("@address1", add1.Text);
             cmd.Parameters.AddWithValue("@zipcode", zip.Text);
             cmd.Parameters.AddWithValue("@country", country.Text);
             cmd.Parameters.AddWithValue("@state", state.Text);
             cmd.Parameters.AddWithValue("@mobile", mobile.Text);
             cmd.Parameters.AddWithValue("@alternativemobile", altmobile.Text);
             cmd.Parameters.AddWithValue("@clientid", Session["clientlogin"]);

             cmd.ExecuteNonQuery();
         
         }
         else
         {
             cmd = new SqlCommand("insert into shippingdetail values (@firstname,@lastname,@email,@address1,@zipcode,@country,@state,@mobile,@alternativemobile,@clientid)", cn);

             cmd.Parameters.AddWithValue("@firstname", firstname.Text);
             cmd.Parameters.AddWithValue("@lastname", lastname.Text);
             cmd.Parameters.AddWithValue("@email", email.Text);
             cmd.Parameters.AddWithValue("@address1", add1.Text);
             cmd.Parameters.AddWithValue("@zipcode", zip.Text);
             cmd.Parameters.AddWithValue("@country", country.Text);
             cmd.Parameters.AddWithValue("@state", state.Text);
             cmd.Parameters.AddWithValue("@mobile", mobile.Text);
             cmd.Parameters.AddWithValue("@alternativemobile", altmobile.Text);
             cmd.Parameters.AddWithValue("@clientid", Session["clientlogin"]);

             cmd.ExecuteNonQuery();
         }

         firstname.ReadOnly = true;
         lastname.ReadOnly = true;
         email.ReadOnly = true;
         add1.ReadOnly = true;
         zip.ReadOnly = true;
         mobile.ReadOnly = true;
         altmobile.ReadOnly = true;
         country.Enabled =false;
         state.Enabled = false;
        cn.Close();
        
    }
    protected void changebtn_Click(object sender, EventArgs e)
    {
      
        firstname.ReadOnly = false;
        lastname.ReadOnly = false;
        email.ReadOnly = false;
        add1.ReadOnly = false;
        zip.ReadOnly = false;
        country.Enabled = false;
        state.Enabled = false;
        mobile.ReadOnly = false;
        altmobile.ReadOnly = false;
        country.Enabled = true;
        state.Enabled = true;
    }
    protected void cod_CheckedChanged(object sender, EventArgs e)
    {
        if (cod.Checked == true)
        {
            upiimg.Visible = false;
            lab1.Visible =  false;
            lab2.Visible = false;
            FileUpload1.Visible = false;

        }
    }
    protected void upi_CheckedChanged1(object sender, EventArgs e)
    {
        if (upi.Checked == true)
        {
            upiimg.Visible = true;
            lab1.Visible = true;
            lab2.Visible = true;
            FileUpload1.Visible = true;
            lab1.ForeColor = System.Drawing.Color.Red;
            lab2.ForeColor = System.Drawing.Color.Red;

        }
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        if(cod.Checked == true)
        {
            Response.Write("<script>alert('Your Order Placed Successfully')</script>");
            Response.Redirect("feedback.aspx");
        }
        
    }
}