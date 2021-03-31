import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function App() {

  const csuLogo = {
    uri: "data:image/png;base64,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",
   }
  return (
    <View style={styles.container}>
      <Image
      style={styles.localCSULogo}
      source={require('./assets/Logo.png')}
      />

      <Image
      style={styles.urlCSULogo}
      source={{
        uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVMAAACVCAMAAADSU+lbAAAAkFBMVEX39/ceTSvIw3LHwm7MxnT5+f3GwWoVSSkMRif5+fv19fHSzpAAQyXX1J8MSCjt7N28um1edkTKxXeKlleys2iBj1PX1KDBv2/Py4jm5MqqrGTx8OZHZjosVjFzhEzh3ro+YDfj4cPMyH/r6tfb2Krd2rGfpWDh37yXn1w4XTVUb0CEkVTU0JZme0dwgkswWDJWl0r0AAANBUlEQVR4nO2dV5uqMBCGaRKCiB1RrFhWXXX//787KbArJUhiPI8l38VeLUzyku7MRNOUlJSUlJSUlJSUlJSUlJSUlJSeVxCrUVvk3x9vp56ZGu8rf4nwg3Xqqbnt1XYTtGor2Gy/1pHGxxXxcdvjRX07QbBZjNvuDa5ujfdty94AtzWK4HKhTN+srTehadsmp9ATcbCujxXC9iI0uO3YttFcRFVWXOP2S5plzzeatwtjCDBtuIvYNg1BmXZvEzVqEdVWIaqBoBU7XLGpur3bb2AwvV2eHjdT6G4F6/lXXDNwbzZVRLQn/uUM8vHGLKrPxbQx7tn0UcuyjFGHQyP8iEULbHzdgArboaCd0a8Vww6jcjOEacVLbzCtqiM3U6gFdlLRQf+81IHPI3157g+S+tqnyqYKv2gbtazR/jKd6TxWZsf5bkTNmOaqdJjBTK2+x3qFN6hkOmA/2Ld4mUKXNh5r1J/6DgA6r4DjH75HtLo9RhsialE7xu4I+O0A4OjHCaVqb8qsUKYO6wU3mbIedLiZQjc2SU37M4ef569dfWhYpP+3mVCbFOlu6YnaAd50R6G2Sqw8DdMU6eDAfGc9OTNaXYPVUk8YqdU5ChPFAt6Z9IgyqE/DVAsJ0r5/T02TQs9JS41Lx1RIxmxrN7vXjjObEKjF1fuzMG1sSFXndzbSpNRdizW3wjGxs/fvtwJ80iHsdd7MkzCFa4lIkXUC1V4VCg5d0ht2cuxQqIVaPglTLSYdXxJSVO4hGVML9mELldqa3D++JBogM+Ymt6J6DqZwZePpSVpVkX3chApLHdgm69KDLENgSQaZ3Gz4JEzxzsOaSmQKZkZJQ22ccDOdM6vLLe+bNNQnZEomDlmDXFoAXFs7t0mNyN5Pqh2y08xW5zmYBqbkZor0gysbZoY6OsRIbKbppxtnCD0FU40s9qU2H1R0MqJmSgBxmUczqWZ+cOdvPR1T2MbNZyhhyXgtcC62ILKOkmvHwVN/nKnPUzAlw6nkrq/rB9z5r3c5MHrAtyMVNaOnY7rFU4fcLonVyfVK+u2Ocr8d7Q6ZvdRTMMVTVEdqTbF81CszZadT1EGuFXAsDDFPwRRvbmQu+JOyTxDT8Jrply2/P5Bl/xMyPT2MqZFhunjAGEOZrhRTiXpVpqBC7Kf4mYqYeVGmYNlli322zM20wg57sfCaTNHMWqEOkxEv00o7Qxai12Tqf1sVPgTsvQIvU2fItmNNWDuFF2VaUVfF9B6mdonMBzAtMfOuTM12iRaVR4RCTM110Uz4rkxdWFT12YsY0xI7qKZvyrTkuUcwjYpmqpkeFFNpTNFGwPE8fTpXTCUwRTAdX18e5/3JiHpOKqbCTDFMB8yml/5uQBxR08WXYirE1PM8tHcd7icd4womlfkpTIFMpkanv+tYVpEmicwIW+13Z4q7KJgtu/ind4G1VClTowymEZ+2q3akwWzU0lsxJTOxfzjOaQ81RJiO3UYu9gFmIxcwTbvX3HytIxc2ykKl3oQpnonBz/T8vaPD3W+j4t6bmma8WWeiylKmpGn2wtZ23KbRfyxH7NdnuvQc/cCcPOL6TP25lT5lNrd/XGFok1GzuVkxm+Z7MTX2uXVNpocGq+v/v3F+Ov17B3rcDBFXPA7AoLVYtynMWjGCr8+0bPLokcnD1bIQbp/z9ztGhquBucLG7ab5ZkxzNMM0yraI4fbvUY5/OO87120ecb0eBz6GKennBpk8XK2ih9b63RQtHQ6XDFcz4ZpfD7wrUxMvEsnkod0OrYeLmj4TwAGHy64wDixqtteXZrpuMft5qR3sh2L93GZKufrLy67QXhdt7a3n/RpNM/vvnP5SAHjOcl7KtTLdw0sz5RQJGOL068PRpXmuaCbcrDU21Y9iGom5niOuYEqioa+4xtuI1Vg/iWniJy3kzo/GAT/bXk07YGS0+Cimd/rzA4eMA6MUq2luSkNaP4spmfjPd8VDO55+/O6kuRd6ZRHtn8WUxkfd69CPuC77o4RqSZqQj2KaxPEx/cnqC60G5h1C9Uljzf8fUxI1hJZTMqLOHL1PoX7lZ6rPYpqkCTCmUkL5vClpqrkYrI9jmuZ+6koJGgQzHHBWqOanMU2iza0+kNFUgY5b6jPGRf9PpmiDSqGOLroEqmBJhtRsAP/HMUVQDUq1M5zdn9CG/ti6+XCmaJUaJ+nWjF3X9+5IZkVEEr5lDHwgUw3CNNEi2g7t5lPgCSRd+60oCeB/vnjT/8wUN9VWmr4Sh67sLksgOgwQn95M+PWHMkVNNQrs32SdmOv+cvBEkgTq3ggjul73vzRT0RzS5NmGuwrNvxyohOt5CbiHV5LPovcu7RSuyS+ld6TnjlZN4ypZLxpeEdeDz8WV1DSTIOilmY5xPE+vGSzGxLeOnyxO0r3eNu0MV2uwP8/qLwecQvFenCk9Gsa/79d3Zypy1RBX4yoVMh4H+t2feu2VuFll3FbfgOnfT5rE7W4hMB7Q9hpmuRqDfnfm3OQKKNMra6/PNOsulaAl7qFao7brSMp1E9qZaQtxPepe5TrrHZlOBmVOkng4MOPTdlybacp1vMktB6zJ8KhXRMK/H1Nr6ekHHFaTc+alaDP+pzd5klaN/kbjTZxbZl3YofBvyBT7SWOnc0efnof7Sc4XNazBlFx4gi/pCJomPV9GM100DuLrcYBVurdlmtQuCV/CHuijEn/+Mpios0fr1abZo5eBXJ3Zk/YapO2V7Wb13kz/0HrObNmd5+NOcjA13DRbIaWZNMfc7yCwoUWrVk8xTckW4qMSmg0Eav312zQzA3DhtyX0QGNV6Q74QUxL4vg00jS3p9i8bpp/83sp09QdUDEtZQpbcTlMtM3f9S8XSzHlZxqbBZqdyX54XupoBHamiqkA0/Cqn486u+/zdAZ8Jzk1BYqpOFPUNOfH5czLHUErpqJMrQnwPafsQF8xFWfKKrJiKs6UmSTu85hqJXd9PoIpy4xspqWXl/7nPGitoKimIZup0WSZkcvU6JXYCYLY+K9Myy/7lM6UYUU6U2Z9Xi0HYg2mTDOymTL1X5hW5XvEZ9KSmOrLSjPssH9uppNKQ8yFidQ8vT+TEVt9jjy91Uz9foWZobxzfnDsVBjqsOMMpeaT9irEdiLlZYo2/SJmuJnqoKo+FTcvPmXe8xtMxcTPVFSKqWIqridliu/m6DyEafa+k4cwdXh9e4Tl8zDd4NBa6UUAeA94umZKtn6Sr6mijtLZ44hYOPy62hL2yozz9BhMFxw5NeprNspFL5D7f6R/O+p/el2fRli5bRdW4aKhKqYk/0NXcuenZyLXIbb02zH3CIIq+kmTfsd2shAWvgrTDGo61pD8D3vJnYVsv+zrWPCH3FFX4s9PDwdltxEd4MuFS+4WZjRUNABJ75QO3lbnbsnEez/JAyqZjLNxJzRHiNyrRfX00kbWbe0FpvjyOIvt5iUicv+Y2crexUluNpZ8eVwxPgotMPAJk+QL1cjlorX8v5IPS3IVSP2wZHWau3OcDtzsQwoB0ZVULuCU5rOQd/s1kdfPzw/VSnIVSOyVDr560Cx49uBBxupKHLl/cDMtdsjqk10R0aupi7eKsxtqm4bVSysEoHXN/7pEvYBH7DuneEXGuOJcDLe27JEb4LD2kqQWFVDJ7cadCndkPvm455es5chIx74Uglf0Svr8veZILukQe3m939tjS7UvNqaFIOexA0lQ/R2jrmRKlrbJ8Uhm37LlDRm5JQ6pZDDNTw+3lMQ7DGR0S6DvWHVN7uO0djI+XtJKT2UVhRsKVc7H8ynSDRdSNE2RRJrW6Hj3p3UOg4oSwIB+vMO9tQWAdEeTsQFPMtBPZvdTdWbk15a629LCl0Wf9r5SOPqQepK2GCWAJ5oxeXhXngngdUmCGbNXmgoNySWLVMu43Jl4AfhnEq9khixLVVC3FOoI1VY08NvRL0naJxZSpBO107mIBpgDxz/SH+rMmLmvgW5I7Qy6fAGsOUvdAbUkghR1/68k/8No3wXEUYxHjuP5x9/0ZFWLjqRHIDv9o89vx/OW8wGNwLCrKgq1FoVqdb6nOJ8Fr1CFpmkaO7tVkRy0SrCdZtWwjMF+eK641rSg87w/SZMVm73qCbIx7v3mmZj05zx2zvPv3ySIprmtjhOEK1PUDq3Qn6W6RyclhdC2V/kfuEWfNO3gVjeBbmCL20nNhGUJELN2otMddv4sneqenJSqEQVmJkM8r3ABytOSsmoraCYc1whmhXDdvMsOttRci6d+SErhLq4DPvnMm/E2qpmwG0bbWMyOadq9Vt16QtjeXAcEclbI7m3adxJNq7sKYvxCHplG3PrCWcnrm9HaXyd+Oz2arL9+dRpae4Hs8JmxSQzyrXTgHIL4RqYoKrvTlKWI5kPgt+NymWlH5FoFgfpw2sGW+CtUoyQ8ejc7smkqKSkpKSkpKSkpKSkpKSkpfbj+AdDFBnCzMUO8AAAAAElFTkSuQmCC"
      }}
      />
      <Image style={styles.strechLogo}
      source={csuLogo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  localCSULogo: {
    width: 100,
    height: 125,
    resizeMode: "stretch" ,
  },
  urlCSULogo: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },

  strechLogo: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  }
});