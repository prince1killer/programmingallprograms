using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for DAL
/// </summary>
public class connection
{
    public SqlConnection con;
    public SqlCommand cmd;
    public SqlDataAdapter da;
    public DataSet ds;

    public void mycon()
    {
        con = new SqlConnection(ConfigurationManager.ConnectionStrings["dbcon"].ToString());
        con.Open();
    }
}
public class DAL : connection
{
    //catmaster
    public int categoryinsert(BAL rBal)
    {
        mycon();
        try
        {
            cmd = new SqlCommand("insert into categorymaster values(@catname,@catdate)", con);
            cmd.Parameters.AddWithValue("@catname", rBal.catname);
            cmd.Parameters.AddWithValue("@catdate", rBal.catdate);
            cmd.ExecuteNonQuery();
            con.Close();
            con.Dispose();
            return 1;

        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();
            throw;

        }
        finally
        {

            con.Close();
            con.Dispose();
        }
    }

    public DataSet getcategorydata()
    {

        mycon();
        try
        {
            cmd = new SqlCommand("select * from categorymaster", con);
            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);
            con.Close();
            con.Dispose();
            return ds;


        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();

            throw;
        }
        finally
        {
            con.Close();
            con.Dispose();

        }

    }


    public DataSet getcategorydatafromquerystring(BAL rBal)
    {

        mycon();
        try
        {
            cmd = new SqlCommand("select * from categorymaster where catid=@id", con);
            cmd.Parameters.AddWithValue("@id", rBal.catid);
            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);
            con.Close();
            con.Dispose();
            return ds;


        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();

            throw;
        }
        finally
        {
            con.Close();
            con.Dispose();

        }

    }

    public DataSet getcatdataquerystring(subBAL rBal)
    {

        mycon();
        try
        {
            cmd = new SqlCommand("select * from categorymaster where catid=@id", con);
            cmd.Parameters.AddWithValue("@id", rBal.catid);
            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);
            con.Close();
            con.Dispose();
            return ds;


        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();

            throw;
        }
        finally
        {
            con.Close();
            con.Dispose();

        }

    }

    public int deleterow(BAL rBAL)
    {
        mycon();
        try
        {
            cmd = new SqlCommand("delete from categorymaster where catid=@id", con);
            cmd.Parameters.AddWithValue("@id", rBAL.catid);
            cmd.ExecuteNonQuery();
            con.Close();
            con.Dispose();
            return 1;
        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();
            throw;
        }
        finally
        {
            con.Close();
            con.Dispose();

        }

    }

    public int updaterow(BAL rBAL)
    {
        mycon();
        try
        {
            cmd = new SqlCommand("update categorymaster set category=@category,categorydate=@cdate where catid=@id", con);
            cmd.Parameters.AddWithValue("@id", rBAL.catid);
            cmd.Parameters.AddWithValue("@category", rBAL.catname);
            cmd.Parameters.AddWithValue("@cdate", rBAL.catdate);
            cmd.ExecuteNonQuery();
            con.Close();
            con.Dispose();
            return 1;
        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();
            throw;
        }
        finally
        {
            con.Close();
            con.Dispose();

        }

    }


    //subcatmaster
    public int subcatmasterinsert(subBAL rBal)
    {
        mycon();
        try
        {
            cmd = new SqlCommand("insert into subcatmaster values(@catid,@subcatname,@catdate)", con);
            cmd.Parameters.AddWithValue("@catid", rBal.catid);
            cmd.Parameters.AddWithValue("@subcatname", rBal.subcat);
            cmd.Parameters.AddWithValue("@catdate", rBal.subcatdate);
            cmd.ExecuteNonQuery();
            con.Close();
            con.Dispose();
            return 1;

        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();
            throw;

        }
        finally
        {

            con.Close();
            con.Dispose();
        }
    }
    public int deletesubcatrow(subBAL rBAL)
    {
        mycon();
        try
        {
            cmd = new SqlCommand("delete from subcatmaster where subcatid=@id", con);
            cmd.Parameters.AddWithValue("@id", rBAL.subcatid);
            cmd.ExecuteNonQuery();
            con.Close();
            con.Dispose();
            return 1;
        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();
            throw;
        }
        finally
        {
            con.Close();
            con.Dispose();

        }

    }
    public int updatesubcat(subBAL rBAL)
    {
        mycon();
        try
        {
            cmd = new SqlCommand("update subcatmaster set catid=@catid,subcategory=@subcat,subcatdate=@subcatdate where subcatid=@subcatid", con);
            cmd.Parameters.AddWithValue("@catid", rBAL.catid);
            cmd.Parameters.AddWithValue("@subcat", rBAL.subcat);
            cmd.Parameters.AddWithValue("@subcatdate", rBAL.subcatdate);
            cmd.Parameters.AddWithValue("@subcatid", rBAL.subcatid);

            cmd.ExecuteNonQuery();
            con.Close();
            con.Dispose();
            return 1;
        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();
            throw;
        }
        finally
        {
            con.Close();
            con.Dispose();

        }

    }
    public DataSet getsubcategorydata()
    {

        mycon();
        try
        {
            cmd = new SqlCommand("select * from subcatmaster", con);
            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);
            con.Close();
            con.Dispose();
            return ds;


        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();

            throw;
        }
        finally
        {
            con.Close();
            con.Dispose();

        }

    }
    public DataSet getsubcatdatafromquerystring(subBAL rBal)
    {

        mycon();
        try
        {
            cmd = new SqlCommand("select * from subcatmaster where subcatid=@id", con);
            cmd.Parameters.AddWithValue("@id", rBal.subcatid);
            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);
            con.Close();
            con.Dispose();
            return ds;


        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();

            throw;
        }
        finally
        {
            con.Close();
            con.Dispose();

        }

    }



    //Thirdcatmaster
    public DataSet getthirdcategorydata()
    {

        mycon();
        try
        {
            cmd = new SqlCommand("select * from thirdcatmaster", con);
            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);
            con.Close();
            con.Dispose();
            return ds;


        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();

            throw;
        }
        finally
        {
            con.Close();
            con.Dispose();

        }

    }
    public DataSet getthirdcatdatafromquerystring(ThirdBal rBal)
    {

        mycon();
        try
        {
            cmd = new SqlCommand("select * from thirdcatmaster where thirdcatid=@id", con);
            cmd.Parameters.AddWithValue("@id", rBal.thirdcatid);
            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);
            con.Close();
            con.Dispose();
            return ds;


        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();

            throw;
        }
        finally
        {
            con.Close();
            con.Dispose();

        }

    }

    public int updatethirdcat(ThirdBal rBAL)
    {
        mycon();
        try
        {
            cmd = new SqlCommand("update thirdcatmaster set subcatid=@subcatid,catid=@catid,thirdcatname=@thirdcatname,thirdcatimg=@thirdcatimg,thirdcatprice=@thirdcatprice,thirdcatdesc=@thirdcatdesc,thirdcatdate=@thirdcatdate where thirdcatid=@thirdcatid", con);
            cmd.Parameters.AddWithValue("@thirdcatid", rBAL.thirdcatid);
            cmd.Parameters.AddWithValue("@subcatid", rBAL.subcatid);
            cmd.Parameters.AddWithValue("@thirdcatprice", rBAL.thirdcatprice);
            cmd.Parameters.AddWithValue("@thirdcatdesc", rBAL.thirdcatdesc);
            cmd.Parameters.AddWithValue("@catid", rBAL.catid);
            cmd.Parameters.AddWithValue("@thirdcatname", rBAL.thirdcatname);
            cmd.Parameters.AddWithValue("@thirdcatimg", rBAL.thirdcatimg);
            cmd.Parameters.AddWithValue("@thirdcatdate", rBAL.thirdcatdate);
            cmd.ExecuteNonQuery();
            con.Close();
            con.Dispose();
            return 1;
        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();
            throw;
        }
        finally
        {
            con.Close();
            con.Dispose();

        }

    }



    public int thirdcatmasterinsert(ThirdBal rBal)
    {
        mycon();
        try
        {
            cmd = new SqlCommand("insert into thirdcatmaster values(@subcatid,@catid,@thirdcatname,@thirdcatimg,@thirdcatprice,@thirdcatdesc,@thirdcatdate)", con);
            cmd.Parameters.AddWithValue("@subcatid", rBal.subcatid);
            cmd.Parameters.AddWithValue("@catid", rBal.catid);
            cmd.Parameters.AddWithValue("@thirdcatname", rBal.thirdcatname);
            cmd.Parameters.AddWithValue("@thirdcatimg", rBal.thirdcatimg);
            cmd.Parameters.AddWithValue("@thirdcatdesc", rBal.thirdcatdesc);
            cmd.Parameters.AddWithValue("@thirdcatprice", rBal.thirdcatprice);
            cmd.Parameters.AddWithValue("@thirdcatdate", rBal.thirdcatdate);
            cmd.ExecuteNonQuery();
            con.Close();
            con.Dispose();
            return 1;

        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();
            throw;

        }
        finally
        {

            con.Close();
            con.Dispose();
        }
    }

    public int deletethirdcatrow(ThirdBal rBAL)
    {
        mycon();
        try
        {
            cmd = new SqlCommand("delete from thirdcatmaster where thirdcatid=@id", con);
            cmd.Parameters.AddWithValue("@id", rBAL.thirdcatid);
            cmd.ExecuteNonQuery();
            con.Close();
            con.Dispose();
            return 1;
        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();
            throw;
        }
        finally
        {
            con.Close();
            con.Dispose();

        }

    }

    //Registration

    public int registration(registratinBal rBal)
    {
        mycon();
        try
        {
            cmd = new SqlCommand("insert into registration values(@name,@user,@pass,@em,@date)", con);
            cmd.Parameters.AddWithValue("@name", rBal.name);
            cmd.Parameters.AddWithValue("@user", rBal.username);
            cmd.Parameters.AddWithValue("@pass", rBal.password);
            cmd.Parameters.AddWithValue("@em", rBal.email);
            cmd.Parameters.AddWithValue("@date", rBal.regdate);
            cmd.ExecuteNonQuery();
            con.Close();
            con.Dispose();
            return 1;

        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();
            throw;

        }
        finally
        {

            con.Close();
            con.Dispose();
        }
    }


    public DataSet getregistereduserinfo(registratinBal rbal)
    {

        mycon();
        try
        {
            cmd = new SqlCommand("select * from registration where email=@em and password=@ps", con);
            cmd.Parameters.AddWithValue("@em", rbal.email);
            cmd.Parameters.AddWithValue("@ps", rbal.password);
            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);
            con.Close();
            con.Dispose();
            return ds;


        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();

            throw;
        }
        finally
        {
            con.Close();
            con.Dispose();

        }

    }
    public DataSet getemailofregistereduser(registratinBal rbal)
    {

        mycon();
        try
        {
            cmd = new SqlCommand("select * from registration where email=@em", con);
            cmd.Parameters.AddWithValue("@em", rbal.email);
            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);
            con.Close();
            con.Dispose();
            return ds;


        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();

            throw;
        }
        finally
        {
            con.Close();
            con.Dispose();

        }

    }


    public int updatevarifieduser(registratinBal rBAL)
    {
        mycon();
        try
        {
            cmd = new SqlCommand("update registration set password=@ps where email=@em", con);
            cmd.Parameters.AddWithValue("@ps", rBAL.password);
            cmd.Parameters.AddWithValue("@em", rBAL.email); cmd.ExecuteNonQuery();
            con.Close();
            con.Dispose();
            return 1;
        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();
            throw;
        }
        finally
        {
            con.Close();
            con.Dispose();

        }

    }

    public DataSet getallusersinfo()
    {

        mycon();
        try
        {
            cmd = new SqlCommand("select * from registration", con);
            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);
            con.Close();
            con.Dispose();
            return ds;


        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();

            throw;
        }
        finally
        {
            con.Close();
            con.Dispose();

        }

    }

    //ordermaster


    public int orderinsert(orderBal rBal)
    {
        mycon();
        try
        {
            cmd = new SqlCommand("insert into ordermaster values(@userid,@thirdid,@orderaddress,@orderdate)", con);
            cmd.Parameters.AddWithValue("@userid", rBal.userid);
            cmd.Parameters.AddWithValue("@thirdid", rBal.thirdcatid);
            cmd.Parameters.AddWithValue("@orderaddress", rBal.orderaddress);
            cmd.Parameters.AddWithValue("@orderdate", rBal.orderdate);
            cmd.ExecuteNonQuery();
            con.Close();
            con.Dispose();
            return 1;

        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();
            throw;

        }
        finally
        {

            con.Close();
            con.Dispose();
        }
    }

    //ordesrs page


    public DataSet getordersofuser(orderBal rbal)
    {

        mycon();
        try
        {
            //cmd = new SqlCommand("select * from ordermaster where userid=@oid", con);
            cmd = new SqlCommand("select * from ordermaster om left join thirdcatmaster tm on om.thirdcatid = tm.thirdcatid where om.userid=@oid;", con);
            cmd.Parameters.AddWithValue("@oid", rbal.userid);
            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);
            con.Close();
            con.Dispose();
            return ds;


        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();

            throw;
        }
        finally
        {
            con.Close();
            con.Dispose();

        }

    }


    public DataSet getorders()
    {

        mycon();
        try
        {
            cmd = new SqlCommand("select * from ordermaster", con);
            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);
            con.Close();
            con.Dispose();
            return ds;


        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();

            throw;
        }
        finally
        {
            con.Close();
            con.Dispose();

        }
    }


    public int deleteorderforuser(orderBal rBAL)
    {
        mycon();
        try
        {
            cmd = new SqlCommand("delete from ordermaster where orderid=@id", con);
            cmd.Parameters.AddWithValue("@id", rBAL.orderid);
            cmd.ExecuteNonQuery();
            con.Close();
            con.Dispose();
            return 1;
        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();
            throw;
        }
        finally
        {
            con.Close();
            con.Dispose();

        }

    }



    public DataSet searchItems(orderBal obal)
    {

        mycon();
        try
        {
            cmd = new SqlCommand("select * from thirdcatmaster where thirdcatname Like  @tdcatname", con);
            cmd.Parameters.AddWithValue("@tdcatname", "%"+obal.thirdcatname+"%");
            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);
            con.Close();
            con.Dispose();
            return ds;


        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();

            throw;
        }
        finally
        {
            con.Close();
            con.Dispose();

        }
    }

    //cartmaster
    public DataSet getcartmasterdata(cartBal rbal)
    {

        mycon();
        try
        {
            cmd = new SqlCommand("select * from cartmaster cm left join thirdcatmaster tm on cm.thirdcatid = tm.thirdcatid where cm.userid=@oid;", con);
            cmd.Parameters.AddWithValue("@oid", rbal.userid);
            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);
            con.Close();
            con.Dispose();
            return ds;

        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();

            throw;
        }
        finally
        {
            con.Close();
            con.Dispose();

        }

    }


    public int cartinsert(cartBal rBal)
    {
        mycon();
        try
        {
            cmd = new SqlCommand("insert into cartmaster values(@uid,@thirdcatid)", con);
            cmd.Parameters.AddWithValue("@uid", rBal.userid);
            cmd.Parameters.AddWithValue("@thirdcatid", rBal.thirdcatid);
            cmd.ExecuteNonQuery();
            con.Close();
            con.Dispose();
            return 1;

        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();
            throw;

        }
        finally
        {

            con.Close();
            con.Dispose();
        }
    }


    public int deletecartitems(cartBal rBAL)
    {
        mycon();
        try
        {
            cmd = new SqlCommand("delete from cartmaster where cartid=@id", con);
            cmd.Parameters.AddWithValue("@id", rBAL.cartid);
            cmd.ExecuteNonQuery();
            con.Close();
            con.Dispose();
            return 1;
        }
        catch (Exception)
        {
            con.Close();
            con.Dispose();
            throw;
        }
        finally
        {
            con.Close();
            con.Dispose();

        }

    }



}