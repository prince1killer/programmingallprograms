using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

public partial class adminlogin : System.Web.UI.Page
{
    SqlCommand cmd;
    SqlConnection cn;
    SqlDataAdapter da;
    DataSet ds;

    void mycon()
    {
        cn = new SqlConnection(@"Data Source=(LocalDB)\v11.0;AttachDbFilename=D:\New E drive\MasterPage\App_Data\ecommerce.mdf;Integrated Security=True");

        cn.Open();
    }

    protected void loginbtn_Click(object sender, EventArgs e)
    {
        mycon();
        cmd = new SqlCommand("select * from adminlogin where username=@user and password=@password", cn);

        cmd.Parameters.AddWithValue("@user", txtuser.Text);
        cmd.Parameters.AddWithValue("@password", txtpassword.Text);

        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        if (ds.Tables[0].Rows.Count > 0)
        {
            Response.Redirect("http://localhost:1235/a_addcategory.aspx");
        }
        else
        {
            cmd = new SqlCommand("select * from userlogin where username=@user and password=@password", cn);

            cmd.Parameters.AddWithValue("@user", txtuser.Text);
            cmd.Parameters.AddWithValue("@password", txtpassword.Text);

            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);

            if (ds.Tables[0].Rows.Count>0)
            {
                
                Response.Write("You are Client");
            }

        }
    }
}