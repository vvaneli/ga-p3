
export function chatTextarea() {

  function handleReply() {

  }
return (
  <div>
    <form onSubmit={handleSubmitReply}>
      <label htmlFor='text'>Nickname</label>
      <input type='button' name='' id='' value={} onChange={handleReply} />
      {/* Chat input */}
      <textarea name='reply' id='reply' value={} autoFocus onChange={handleReply} required placeholder='Type your reply to Fran'></textarea>
      <button type='submit'>Reply</button>
    </form>
  </div>
)
}

// <textarea autoFocus>
// <input type="text">
// <input type="button">
// <input type="file">
// <input type="image">
// <input type="range">