export function VanillaComponentLoader(props: { path: string }) {
  function readFileSync(filePath: string): string {
    const fileData = Deno.readTextFileSync(filePath);
    return fileData;
  }

  let content = "Error";
  let hash: string | number = Date.now() + Math.random();
  hash = "fresh-vanilla-component-" + (Math.floor(hash * 10 * 8)).toString(16);

  const filePath = props.path;
  try {
    const data = readFileSync(filePath);
    content = data;
  } catch (error) {
    console.error("Error ", error);
  }

  content = content.replace(/_this_/g, "." + hash);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }} className={hash}></div>
      <style>
        {`html-fresh {
            display: contents;
        }`}
      </style>
    </>
  );
}
