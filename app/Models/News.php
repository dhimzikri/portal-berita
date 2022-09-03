<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class News extends Model
{
    use HasFactory;

    public function forSearch() {
        return [
            'title'=>$this->title,
            'email'=>$this->email,
        ];

    }
}
