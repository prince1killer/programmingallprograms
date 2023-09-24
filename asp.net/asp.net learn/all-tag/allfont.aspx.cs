using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;

public partial class allfont : System.Web.UI.Page
{
    SqlConnection con;
    SqlCommand cmd;
    SqlDataAdapter da;
    DataSet ds;

    void mydata() {
        con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|datadirectory|allform.mdf;Integrated Security=True");
        con.Open();
    }
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        mydata();
        cmd = new SqlCommand("insert into allformtable values(@na,@em,@ps,@dob)",con);
        cmd.Parameters.AddWithValue("@na",TextBox1.Text);
        cmd.Parameters.AddWithValue("@em", TextBox2.Text);
        cmd.Parameters.AddWithValue("@ps", TextBox3.Text);
        if (DropDownList1.SelectedValue == "Day" || DropDownList2.SelectedValue == "Month" || DropDownList3.SelectedValue == "Year")
        {
            Response.Write("Please Enter correct date of bearth");
        }
        else {
            cmd.Parameters.AddWithValue("@dob",DropDownList1.SelectedValue+"/"+DropDownList2.SelectedValue+"/"+DropDownList3.SelectedValue);
        }
        cmd.ExecuteNonQuery();
        con.Close();
        Response.Write("Successfully uploded");
    }
    
    protected void Button2_Click(object sender, EventArgs e)
    {
        mydata();
        if (TextBox5.Text == "")
        {
            cmd = new SqlCommand("select * from allformtable", con);
        }
        else { 
            cmd = new SqlCommand("Select * from allformtable where id="+TextBox5.Text,con);
        }
        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        GridView1.DataSource= ds;
        GridView1.DataBind();

    }

    protected void Button3_Click(object sender, EventArgs e)
    {
        mydata();
            cmd = new SqlCommand("Select * from allformtable where id=" + TextBox5.Text, con);
        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        if (ds.Tables[0].Rows.Count>0)
        {

            TextBox1.Text = ds.Tables[0].Rows[0]["yname"].ToString();
            TextBox2.Text = ds.Tables[0].Rows[0]["yemail"].ToString();
            TextBox3.Text = ds.Tables[0].Rows[0]["npassword"].ToString();
            
            string d= ds.Tables[0].Rows[0]["dob"].ToString();
            string[] db = d.Split('/');

            DropDownList1.Text = db[0];
            DropDownList2.Text = db[1];
            DropDownList3.Text = db[2];



        }
        else
        {
            Response.Write("<script>alert('data not found')</script>");
        }
       
    }

    protected void Edit_Click(object sender, EventArgs e)
    {
        mydata();
        cmd = new SqlCommand("update allformtable set yname=@na,yemail=@em,npassword=@ps,dob=@dob where id=@id", con);
        cmd.Parameters.AddWithValue("@id", TextBox5.Text);

        cmd.Parameters.AddWithValue("@na", TextBox1.Text);
        cmd.Parameters.AddWithValue("@em", TextBox2.Text);
        cmd.Parameters.AddWithValue("@ps", TextBox3.Text);
        if (DropDownList1.SelectedValue == "Day" || DropDownList2.SelectedValue == "Month" || DropDownList3.SelectedValue == "Year")
        {
            Response.Write("Please Enter correct date of bearth");
        }
        else
        {
            cmd.Parameters.AddWithValue("@dob", DropDownList1.SelectedValue + "/" + DropDownList2.SelectedValue + "/" + DropDownList3.SelectedValue);
        }
        cmd.ExecuteNonQuery();
        con.Close();
        Response.Write("Successfully updated...");
    }

    protected void Button4_Click(object sender, EventArgs e)
    {
        mydata();
        cmd = new SqlCommand("delete from allformtable where id="+TextBox5.Text,con);
        cmd.ExecuteNonQuery();
        con.Close();
        Response.Write("Successfully delete...");
    }
}