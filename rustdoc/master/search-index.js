var searchIndex = {};
searchIndex["symbol_map"] = {"doc":"Provides fast mapping of arbitrary values to symbolic identifiers.","items":[[3,"Symbol","symbol_map","A table entry that associates an instance of `T` with an atomic symbol.",null,null],[3,"Table","","The head of a linked list associating `T`s with `SymbolId`s. `SymbolId`\nvalues start at 0 and increase by 1 for each `T` added to the table.",null,null],[3,"TableIntoIter","","Iterator that consumes a table.",null,null],[3,"TableIter","","Iterator over table contents.",null,null],[0,"indexing","","Indexing on top of a `Table`.",null,null],[3,"Ref","symbol_map::indexing","Wrapper for a raw pointer which lets us treat it like a reference.",null,null],[3,"HashIndexing","","HashMap-backed table indexing.",null,null],[4,"Insertion","","Indicates whether the result of a symbol lookup had to create a new table\nentry.",null,null],[13,"Present","","Result came from an item that was already present in table.",0,null],[13,"New","","Result came from an item that was not present in table, and a new entry\nwas created.",0,null],[8,"Indexing","","Provides indexing for a `Table`, so that its elements may be retrieved\nefficiently. Most table lookups should go through an implementation of this\ntrait structure instead of a `Table` directly.",null,null],[16,"Data","","The type `T` of a `Table&lt;T, D&gt;`.",1,null],[16,"Id","","The type `D` of a `Table&lt;T, D&gt;`.",1,null],[10,"from_table","","Returns a new indexing method that has already indexed the contents of\n`table`.",1,{"inputs":[{"name":"table"}],"output":{"name":"self"}}],[10,"table","","Returns a read-only view of the underlying table.",1,null],[10,"to_table","","Extracts the underlying table from the index, discarding all pointers\ninto the table.",1,null],[10,"get","","Looks up `data` in the index. Returns `Some(&amp;symbol)` if a symbol is\npresent, else `None`.",1,null],[10,"get_or_insert","","Looks up `data` in the index, inserting it into the index and `table` if\nit isn&#39;t present. Returns the resulting `&amp;Symbol&lt;T&gt;` wrapped in an\n`Insertion` that indicates whether a new table entry had to be created.",1,null],[10,"get_symbol","","Looks up the symbol with id `i` in the index. Returns `Some(symbol)` if\na symbol is present, else `None`.",1,null],[11,"clone","","",0,null],[11,"cmp","","",0,null],[11,"hash","","",0,null],[11,"eq","","",0,null],[11,"ne","","",0,null],[11,"partial_cmp","","",0,null],[11,"lt","","",0,null],[11,"le","","",0,null],[11,"gt","","",0,null],[11,"ge","","",0,null],[11,"map","","Maps over the type returned by an `Insertion` to produce a new value\nthat may be of a different type.",0,null],[11,"unwrap","","Unwraps an `Insertion` to produce the value which it wraps.",0,null],[11,"clone","","",2,null],[11,"fmt","","",2,null],[11,"fmt","","",2,null],[11,"hash","","",2,null],[11,"cmp","","",2,null],[11,"eq","","",2,null],[11,"partial_cmp","","",2,null],[11,"default","","",3,{"inputs":[],"output":{"name":"self"}}],[11,"from_table","","",3,{"inputs":[{"name":"table"}],"output":{"name":"self"}}],[11,"table","","",3,null],[11,"to_table","","",3,null],[11,"get","","",3,null],[11,"get_or_insert","","",3,null],[11,"get_symbol","","",3,null],[11,"id","symbol_map","Returns the symbol&#39;s ID.",4,null],[11,"data","","Returns a reference to the symbol&#39;s data.",4,null],[11,"hash","","",4,null],[11,"eq","","",4,null],[11,"partial_cmp","","",4,null],[11,"cmp","","",4,null],[11,"new","","Creates a new, empty table.",5,{"inputs":[],"output":{"name":"self"}}],[11,"len","","Returns the number of symbols in the table.",5,null],[11,"insert","","Inserts `value` into the table and assigns it an id. The same value may\nbe inserted more than once. To prevent such operations, use the\n`get_or_insert()` method of `Indexing`.",5,null],[11,"remap","","Remaps associations between `T`s and `D`s, selectively dropping some\nassociations entirely. The addresses of `Symbol&lt;T&gt;`s for entries which\nare retained do not change.",5,null],[11,"into_iter","","",5,null],[11,"iter","","Returns an iterator over table entries.",5,null],[11,"to_hash_map","","Converts `self` to a `HashMap` holding the same associations as\n`self`. If the same key occurs in `self` more than once, then duplicate\noccurrences will be dropped arbitrarily.",5,null],[11,"into_iter","","",5,null],[11,"next","","",6,null],[11,"size_hint","","",6,null],[11,"next","","",7,null],[11,"size_hint","","",7,null],[8,"SymbolId","","An atomic ID.",null,null],[10,"next","","Returns the ID immediately subsequent to this one.",8,null],[10,"as_usize","","Casts the ID to a `usize`.",8,null]],"paths":[[4,"Insertion"],[8,"Indexing"],[3,"Ref"],[3,"HashIndexing"],[3,"Symbol"],[3,"Table"],[3,"TableIter"],[3,"TableIntoIter"],[8,"SymbolId"]]};
initSearch(searchIndex);
