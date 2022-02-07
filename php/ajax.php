<?php
header('Content-Type: application/json');

$data = $_POST;
$action = $data['action'];

switch ($action) {
    case 'call':
        echo json_encode(array(
            'status' => true
        ));
        exit();
        break;
    default:
        echo json_encode(array(
            'status' => false,
        ));
        exit();
        break;
}