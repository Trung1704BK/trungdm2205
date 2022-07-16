<?php
require_once("../config/db.php");

class Product
{
    private $mobiles = array();
    public function getTitle()
    {
        if (isset($_GET['title'])) {
            $title = $_GET['title'];
            $query = 'SELECT * FROM news WHERE title LIKE "%' . $title . '%"';
        } else {
            $query = 'SELECT * FROM news';
        }
        $read = new DBController();
        $this->mobiles = $read->executeSelectQuery($query);
        return $this->mobiles;
    }

    public function addTitle()
    {
        if (isset($_POST['title'])) {
            $title = $_POST['title'];


            $query = "INSERT into news (title) values ('" . $title . "')";
            $read = new DBController();
            $result = $read->executeQuery($query);
            if ($result != 0) {
                $result = array(['success:' => true]);
                return $result;
            }
        }
    }

    public function deleteProduct()
    {
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            $query = 'DELETE FROM news WHERE id = ' . $id;
            $read = new DBController();
            $result = $read->executeQuery($query);
            if ($result != 0) {
                $result = array(['success:' => true]);
                return $result;
            }
        }
    }

    public function editTitle()
    {
        if (isset($_POST['title']) && isset($_GET['id'])) {
            $title = $_POST['title'];

            $query = "UPDATE news SET title = '" . $title . "' WHERE id = " . $_GET['id'];
        }
        $read = new DBController();
        $result = $read->executeQuery($query);
        if ($result != 0) {
            $result = array('success' => 1);
            return $result;
        }
    }
}
