import { defaultOf, disposeSafe, structuralHash, safeHash, equals, toIterator, getEnumerator } from "../fable_modules/fable-library-js.4.21.0/Util.js";
import { removeInPlace } from "../fable_modules/fable-library-js.4.21.0/Array.js";
import { singleton, collect, delay, contains } from "../fable_modules/fable-library-js.4.21.0/Seq.js";
import { containsValue, tryGetValue, addToDict } from "../fable_modules/fable-library-js.4.21.0/MapUtil.js";
import { FSharpRef } from "../fable_modules/fable-library-js.4.21.0/Types.js";
import { class_type } from "../fable_modules/fable-library-js.4.21.0/Reflection.js";
import { Dictionary } from "../fable_modules/fable-library-js.4.21.0/MutableMap.js";
import { toText, printf } from "../fable_modules/fable-library-js.4.21.0/String.js";

/**
 * Raise ArgumentNullException with F# printf string formatting
 */
export function System_ArgumentNullException__ArgumentNullException_Raise_Static_1DA990F7(msg) {
    return msg.cont((s) => {
        throw new Error(s);
    });
}

/**
 * Raise KeyNotFoundException with F# printf string formatting
 */
export function System_Collections_Generic_KeyNotFoundException__KeyNotFoundException_Raise_Static_1DA990F7(msg) {
    return msg.cont((s) => {
        throw new Error(s);
    });
}

export class DefaultDic$2 {
    constructor(defaultOfKeyFun, baseDic) {
        this.defaultOfKeyFun = defaultOfKeyFun;
        this.baseDic = baseDic;
    }
    GetEnumerator() {
        const _ = this;
        return getEnumerator(_.baseDic);
    }
    [Symbol.iterator]() {
        return toIterator(getEnumerator(this));
    }
    "System.Collections.IEnumerable.GetEnumerator"() {
        const __ = this;
        return getEnumerator(__.baseDic);
    }
    "System.Collections.ICollection.get_Count"() {
        const _ = this;
        return _.baseDic.size | 0;
    }
    "System.Collections.ICollection.CopyToZ2AA303D5"(arr, i) {
        const _ = this;
        _.baseDic["System.Collections.ICollection.CopyToZ2AA303D5"](arr, i);
    }
    "System.Collections.ICollection.get_IsSynchronized"() {
        const _ = this;
        return _.baseDic["System.Collections.ICollection.get_IsSynchronized"]();
    }
    "System.Collections.ICollection.get_SyncRoot"() {
        const _ = this;
        return _.baseDic["System.Collections.ICollection.get_SyncRoot"]();
    }
    "System.Collections.Generic.ICollection`1.Add2B595"(x) {
        const _ = this;
        void (_.baseDic.push(x));
    }
    "System.Collections.Generic.ICollection`1.Clear"() {
        const _ = this;
        _.baseDic.clear();
    }
    "System.Collections.Generic.ICollection`1.Remove2B595"(x) {
        const _ = this;
        return removeInPlace(x, _.baseDic, {
            Equals: equals,
            GetHashCode: safeHash,
        });
    }
    "System.Collections.Generic.ICollection`1.Contains2B595"(x) {
        const _ = this;
        return contains(x, _.baseDic, {
            Equals: equals,
            GetHashCode: safeHash,
        });
    }
    "System.Collections.Generic.ICollection`1.CopyToZ3B4C077E"(arr, i) {
        const _ = this;
        _.baseDic["System.Collections.Generic.ICollection`1.CopyToZ3B4C077E"](arr, i);
    }
    "System.Collections.Generic.ICollection`1.get_IsReadOnly"() {
        return false;
    }
    "System.Collections.Generic.ICollection`1.get_Count"() {
        const _ = this;
        return _.baseDic.size | 0;
    }
    "System.Collections.Generic.IDictionary`2.get_Item2B595"(k) {
        const _ = this;
        return DefaultDic$2__dGet_2B595(_, k);
    }
    "System.Collections.Generic.IDictionary`2.set_Item5BDDA1"(k, v) {
        const _ = this;
        DefaultDic$2__set$0027(_, k, v);
    }
    "System.Collections.Generic.IDictionary`2.get_Keys"() {
        const _ = this;
        return _.baseDic.keys();
    }
    "System.Collections.Generic.IDictionary`2.get_Values"() {
        const _ = this;
        return _.baseDic.values();
    }
    "System.Collections.Generic.IDictionary`2.Add5BDDA1"(k, v) {
        const _ = this;
        addToDict(_.baseDic, k, v);
    }
    "System.Collections.Generic.IDictionary`2.ContainsKey2B595"(k) {
        const _ = this;
        return _.baseDic.has(k);
    }
    "System.Collections.Generic.IDictionary`2.TryGetValue6DC89625"(k, r) {
        const _ = this;
        return tryGetValue(_.baseDic, k, new FSharpRef(() => (new FSharpRef(r.contents)).contents, (v) => {
            (new FSharpRef(r.contents)).contents = v;
        }));
    }
    "System.Collections.Generic.IDictionary`2.Remove2B595"(k) {
        const _ = this;
        return _.baseDic.delete(k);
    }
    "System.Collections.Generic.IReadOnlyCollection`1.get_Count"() {
        const _ = this;
        return _.baseDic.size | 0;
    }
    "System.Collections.Generic.IReadOnlyDictionary`2.get_Item2B595"(k) {
        const _ = this;
        return DefaultDic$2__dGet_2B595(_, k);
    }
    "System.Collections.Generic.IReadOnlyDictionary`2.get_Keys"() {
        const _ = this;
        return _.baseDic.keys();
    }
    "System.Collections.Generic.IReadOnlyDictionary`2.get_Values"() {
        const _ = this;
        return _.baseDic.values();
    }
    "System.Collections.Generic.IReadOnlyDictionary`2.ContainsKey2B595"(k) {
        const _ = this;
        return _.baseDic.has(k);
    }
    "System.Collections.Generic.IReadOnlyDictionary`2.TryGetValue6DC89625"(k, r) {
        const _ = this;
        return tryGetValue(_.baseDic, k, new FSharpRef(() => (new FSharpRef(r.contents)).contents, (v) => {
            (new FSharpRef(r.contents)).contents = v;
        }));
    }
}

export function DefaultDic$2_$reflection(gen0, gen1) {
    return class_type("Dic.DefaultDic`2", [gen0, gen1], DefaultDic$2);
}

function DefaultDic$2_$ctor_ZB054DF4(defaultOfKeyFun, baseDic) {
    return new DefaultDic$2(defaultOfKeyFun, baseDic);
}

/**
 * A System.Collections.Generic.Dictionary with default Values that get created upon accessing a key.
 * If accessing a non exiting key , the default function is called on the key to create the value and set it.
 * Similar to  defaultDic in Python
 */
export function DefaultDic$2_$ctor_Z1FC644C9(defaultOfKeyFun) {
    return DefaultDic$2_$ctor_ZB054DF4(defaultOfKeyFun, new Dictionary([], {
        Equals: equals,
        GetHashCode: structuralHash,
    }));
}

/**
 * Constructs a new DefaultDic by using the supplied Dictionary<'K,'V> directly, without any copying of items
 */
export function DefaultDic$2_createDirectly(defaultOfKeyFun, di) {
    if (di == null) {
        System_ArgumentNullException__ArgumentNullException_Raise_Static_1DA990F7(printf("Dictionary in DefaultDic.CreateDirectly is null"));
    }
    return DefaultDic$2_$ctor_ZB054DF4(defaultOfKeyFun, new Dictionary([], {
        Equals: equals,
        GetHashCode: structuralHash,
    }));
}

/**
 * Constructs a new DefaultDic from seq of key and value pairs
 */
export function DefaultDic$2_create(defaultOfKeyFun, keysValues) {
    if (keysValues == null) {
        System_ArgumentNullException__ArgumentNullException_Raise_Static_1DA990F7(printf("seq in DefaultDic.Create is null"));
    }
    const d = new Dictionary([], {
        Equals: equals,
        GetHashCode: structuralHash,
    });
    const enumerator = getEnumerator(keysValues);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const forLoopVar = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            d.set(forLoopVar[0], forLoopVar[1]);
        }
    }
    finally {
        disposeSafe(enumerator);
    }
    return DefaultDic$2_$ctor_ZB054DF4(defaultOfKeyFun, d);
}

/**
 * Access the underlying Collections.Generic.Dictionary<'K,'V>
 * ATTENTION! This is not even a shallow copy, mutating it will also change this Instance of DefaultDic!
 * Use #nowarn "44" to disable the obsolete warning
 */
export function DefaultDic$2__get_Dictionary(_) {
    return _.baseDic;
}

/**
 * For Index operator: get or set the value for given key
 */
export function DefaultDic$2__get_Item_2B595(_, k) {
    return DefaultDic$2__dGet_2B595(_, k);
}

/**
 * For Index operator: get or set the value for given key
 */
export function DefaultDic$2__set_Item_5BDDA1(_, k, v) {
    DefaultDic$2__set$0027(_, k, v);
}

/**
 * Get value for given key.
 * Calls defaultFun to get value if key not found.
 * Also sets key to returned value.
 * Use .TryGetValue(k) if you don't want a missing key to be created
 */
export function DefaultDic$2__Get_2B595(_, k) {
    return DefaultDic$2__dGet_2B595(_, k);
}

/**
 * Set value for given key, same as <c>Dic.add key value</c>
 */
export function DefaultDic$2__set(_, key, value) {
    DefaultDic$2__set$0027(_, key, value);
}

/**
 * Set value for given key, same as <c>Dic.set key value</c>
 */
export function DefaultDic$2__add(_, key, value) {
    DefaultDic$2__set$0027(_, key, value);
}

/**
 * Get a value and remove key and value it from Dictionary, like *.pop() in Python
 * Will fail if key does not exist
 * Does not set any new key if key is missing
 */
export function DefaultDic$2__Pop_2B595(_, k) {
    let arg_2;
    if (equals(k, defaultOf())) {
        return System_ArgumentNullException__ArgumentNullException_Raise_Static_1DA990F7(printf("DefaultDic.Pop(key) key is null"));
    }
    else {
        let patternInput;
        let outArg = defaultOf();
        patternInput = [tryGetValue(_.baseDic, k, new FSharpRef(() => outArg, (v) => {
            outArg = v;
        })), outArg];
        if (patternInput[0]) {
            _.baseDic.delete(k);
            return patternInput[1];
        }
        else {
            throw new Error((arg_2 = (_.baseDic.size | 0), toText(printf("DefaultDic.Pop(key): Failed to pop key %A in %A of %d items"))(k)(_.baseDic)(arg_2)));
        }
    }
}

/**
 * Returns a (lazy) sequence of key and value tuples
 */
export function DefaultDic$2__get_Items(_) {
    return delay(() => collect((matchValue) => {
        const activePatternResult = matchValue;
        return singleton([activePatternResult[0], activePatternResult[1]]);
    }, _.baseDic));
}

/**
 * Gets the number of key/value pairs contained in the Dictionary
 */
export function DefaultDic$2__get_Count(_) {
    return _.baseDic.size;
}

/**
 * Gets a collection containing the keys in the Dictionary
 */
export function DefaultDic$2__get_Keys(_) {
    return _.baseDic.keys();
}

/**
 * Gets a collection containing the values in the Dictionary
 */
export function DefaultDic$2__get_Values(_) {
    return _.baseDic.values();
}

/**
 * Add the specified key and value to the Dictionary.
 */
export function DefaultDic$2__Add_5BDDA1(_, k, v) {
    addToDict(_.baseDic, k, v);
}

/**
 * Removes all keys and values from the Dictionary
 */
export function DefaultDic$2__Clear(_) {
    _.baseDic.clear();
}

/**
 * Determines whether the Dictionary contains the specified key.
 */
export function DefaultDic$2__ContainsKey_2B595(_, k) {
    return _.baseDic.has(k);
}

/**
 * Determines whether the Dictionary contains a specific value.
 */
export function DefaultDic$2__ContainsValue_2B594(_, v) {
    return containsValue(v, _.baseDic);
}

/**
 * Removes the value with the specified key from the Dictionary.
 * See also .Pop(key) method to get the contained value too.
 */
export function DefaultDic$2__Remove_2B595(_, k) {
    return _.baseDic.delete(k);
}

/**
 * Gets the value associated with the specified key.
 * As opposed to Get(key) this does not create a key if it is missing.
 */
export function DefaultDic$2__TryGetValue_2B595(_, k) {
    let outArg = defaultOf();
    return [tryGetValue(_.baseDic, k, new FSharpRef(() => outArg, (v) => {
        outArg = v;
    })), outArg];
}

/**
 * Returns an enumerator that iterates through the Dictionary.
 */
export function DefaultDic$2__GetEnumerator(_) {
    return getEnumerator(_.baseDic);
}

export function DefaultDic$2__dGet_2B595(this$, key) {
    if (equals(key, defaultOf())) {
        return System_ArgumentNullException__ArgumentNullException_Raise_Static_1DA990F7(printf("DefaultDic.get key is null "));
    }
    else {
        let matchValue_1;
        let outArg = defaultOf();
        matchValue_1 = [tryGetValue(this$.baseDic, key, new FSharpRef(() => outArg, (v) => {
            outArg = v;
        })), outArg];
        if (matchValue_1[0]) {
            return matchValue_1[1];
        }
        else {
            const v_2 = this$.defaultOfKeyFun(key);
            this$.baseDic.set(key, v_2);
            return v_2;
        }
    }
}

export function DefaultDic$2__set$0027(this$, key, value) {
    if (equals(key, defaultOf())) {
        System_ArgumentNullException__ArgumentNullException_Raise_Static_1DA990F7(printf("DefaultDic.set key is null for value %A"))(value);
    }
    else {
        this$.baseDic.set(key, value);
    }
}

